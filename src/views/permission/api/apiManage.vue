<template>
  <div>
    <el-card>
      <el-form :inline="true" :model="queryRequest">
        <el-form-item label="用户名">
          <el-input
            v-model="queryRequest.userName"
            placeholder="请输入用户名"
            clearable
          />
        </el-form-item>
        <el-form-item label="角色">
          <el-select
            v-model="queryRequest.userRole"
            placeholder="请选择用户角色"
            clearable
          >
            <el-option label="管理员" value="admin" />
            <el-option label="普通用户" value="user" />
          </el-select>
        </el-form-item>
        <el-form-item label="排序条件">
          <el-select
            v-model="queryRequest.sortField"
            placeholder="请选择排序条件"
            clearable
          >
            <el-option label="创建时间" value="createTime" />
            <el-option label="更新时间" value="updateTime" />
          </el-select>
        </el-form-item>
        <el-form-item label="排序顺序">
          <el-select
            v-model="queryRequest.sortOrder"
            placeholder="请选择排序顺序"
            clearable
          >
            <el-option label="升序" value="asc" />
            <el-option label="降序" value="desc" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetQuery">重置</el-button>
          <el-button type="primary" @click="listApiByPage">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <div style="margin-bottom: 15px" />
    <el-card class="box-card">
      <div class="header">
        <h3 class="title">API列表</h3>
        <div class="config">
          <el-button :icon="Plus" type="primary" @click="showAdd"
            >新建
          </el-button>
        </div>
      </div>
      <!--  展示表格-->
      <el-table
        :data="pageUserList?.records"
        style="width: 100%"
        table-layout="auto"
      >
        <el-table-column fixed type="index" :index="1" />
        <el-table-column fixed prop="name" label="名称" />
        <!--    头像-->
        <!--        <el-table-column label="头像">-->
        <!--          <template #default="scope">-->
        <!--            <div style="display: flex; align-items: center">-->
        <!--              <el-avatar shape="square" :src="scope.row.userAvatar" />-->
        <!--            </div>-->
        <!--          </template>-->
        <!--        </el-table-column>-->
        <el-table-column prop="description" label="描述" />
        <el-table-column prop="url" label="url" />
        <el-table-column prop="requestParams" label="请求参数" />
        <el-table-column prop="requestHeader" label="请求头" />
        <el-table-column prop="responseHeader" label="响应头" />
        <el-table-column label="状态">
          <template #default="scope">
            {{ scope.row.status === 1 ? "开启" : "关闭" }}
          </template>
        </el-table-column>
        <el-table-column prop="method" label="请求类型" />
        <!--    用户权限-->
        <el-table-column fixed="right" label="操作">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click="editApi(scope.row)"
              >编辑
            </el-button>
            <el-button
              link
              type="danger"
              size="small"
              @click="deleteApi(scope.row.id)"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--  底部分页选择-->
      <el-pagination
        style="margin-top: 15px"
        v-model:current-page="pageUserList.current"
        v-model:page-size="pageUserList.size"
        :page-sizes="[5, 10, 15, 20]"
        :small="false"
        :disabled="false"
        :background="false"
        layout="total, sizes, prev, pager, next, jumper"
        :page-count="parseInt(pageUserList.pages)"
        :total="parseInt(pageUserList.total)"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
    <!--  编辑信息对话框-->
    <el-dialog v-model="editFormVisible" title="编辑API" style="width: 580px">
      <el-form :model="currentApi">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="currentApi.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="currentApi.description" autocomplete="off" />
        </el-form-item>
        <el-form-item label="接口地址" :label-width="formLabelWidth">
          <el-input v-model="currentApi.url" autocomplete="off" />
        </el-form-item>
        <el-form-item label="请求参数" :label-width="formLabelWidth">
          <el-input v-model="currentApi.requestParams" autocomplete="off" />
        </el-form-item>
        <el-form-item label="请求头" :label-width="formLabelWidth">
          <el-input v-model="currentApi.requestHeader" autocomplete="off" />
        </el-form-item>
        <el-form-item label="响应头" :label-width="formLabelWidth">
          <el-input v-model="currentApi.responseHeader" autocomplete="off" />
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-select v-model="currentApi.status" placeholder="Select">
            <el-option
              v-for="gender in genderOptions"
              :key="gender.value"
              :label="gender.label"
              :value="gender.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="请求类型" :label-width="formLabelWidth">
          <el-select v-model="currentApi.method" class="m-2">
            <el-option key="GET" label="GET" value="GET" />
            <el-option key="POST" label="POST" value="POST" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancelEdit">取消</el-button>
          <el-button type="primary" @click="confirmEdit"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>

    <!--    新增用户-->
    <el-dialog
      v-model="showAddDialog"
      title="新增API"
      width="30%"
      center
      draggable
    >
      <el-form
        label-position="right"
        label-width="80px"
        :model="addApiInfo"
        style="max-width: 460px"
      >
        <el-form-item label="名称">
          <el-input v-model="addApiInfo.name" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="addApiInfo.description" />
        </el-form-item>
        <el-form-item label="接口地址">
          <el-input v-model="addApiInfo.url" />
        </el-form-item>

        <el-form-item label="请求参数">
          <el-input v-model="addApiInfo.requestParams" />
        </el-form-item>
        <el-form-item label="请求头">
          <el-input v-model="addApiInfo.requestHeader" />
        </el-form-item>
        <el-form-item label="响应头">
          <el-input v-model="addApiInfo.responseHeader" />
        </el-form-item>
        <el-form-item label="接口状态">
          <el-switch
            v-model="addApiInfo.status"
            style="
              --el-switch-on-color: #99daf8;
              --el-switch-off-color: #f077ac;
            "
            inline-prompt
            active-text="开启"
            inactive-text="关闭"
            :active-value="1"
            :inactive-value="0"
          />
        </el-form-item>
        <el-form-item label="请求类型">
          <el-select v-model="addApiInfo.method" class="m-2">
            <el-option key="GET" label="GET" value="GET" />
            <el-option key="POST" label="POST" value="POST" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeAdd">取消</el-button>
          <el-button type="primary" @click="confirmAdd"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { message } from "@/utils/message";
import { markRaw, onMounted, ref } from "vue";
import { ElInput, ElMessage, ElMessageBox } from "element-plus";
import { Delete, Plus } from "@element-plus/icons-vue";
import {
  addApiInfoUsingPost,
  deleteApiInfoUsingPost,
  listApiInfoByPageUsingPost,
  updateApiInfoUsingPost
} from "@/api/apiInfoController";

defineOptions({
  name: "ApiManage"
});

const queryRequest = ref<API.UserQueryRequest>({
  /**
   * 当前页号
   */
  current: 1,
  /**
   * 页面大小
   */
  pageSize: 10
});

const pageUserList = ref<API.PageUser_>({
  current: 0,
  pages: 0,
  records: undefined,
  size: 0,
  total: 0
});

// 初始化api数据
const listApiByPage = async () => {
  const { sortField, sortOrder } = queryRequest.value;
  if (Boolean(sortField) !== Boolean(sortOrder)) {
    return ElMessage.error("请同时设置排序条件和排序字段");
  }
  const res = await listApiInfoByPageUsingPost(queryRequest.value);
  if (res.code === 0) {
    pageUserList.value = res.data;
  } else {
    message(res.message, { type: "error" });
  }
};

/**
 * 充值查询
 */
const resetQuery = () => {
  queryRequest.value = {};
  listApiByPage();
};

// 删除确认框
const deleteApi = id => {
  ElMessageBox.confirm("注意，此操作不可撤销，是否继续？", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
    icon: markRaw(Delete),
    draggable: true
  })
    .then(async () => {
      deleteApiVO.value = {
        id: id
      };
      // 删除用户
      const res = await deleteApiInfoUsingPost(deleteApiVO.value);
      if (res.code === 0) {
        message("删除成功", { type: "success" });
        await listApiByPage();
      } else {
        message(res.message, { type: "error" });
      }
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "取消删除"
      });
    });
};

// 编辑用户信息
const editFormVisible = ref(false);
const formLabelWidth = "100px";
// 当前修改用户
const currentApi = ref<API.ApiInfoUpdateRequest>({});

const deleteApiVO = ref<API.DeleteRequest>({});
// 性别选项
const genderOptions = [
  {
    value: 1,
    label: "开启"
  },
  {
    value: 0,
    label: "关闭"
  }
];
// 修改用户对话框
const editApi = (api: API.LoginUserVO) => {
  editFormVisible.value = true;
  currentApi.value = Object.assign({}, api);
};
// 取消修改
const cancelEdit = () => {
  editFormVisible.value = false;
  currentApi.value = {};
};
// 确认修改
const confirmEdit = async () => {
  const res = await updateApiInfoUsingPost(currentApi.value);
  if (res.code === 0) {
    message("修改成功", { type: "success" });
    await listApiByPage();
    cancelEdit();
  } else {
    message(res.message, { type: "error" });
  }
};
/**
 * 分页
 */
const handleSizeChange = (val: number) => {
  queryRequest.value.pageSize = val;
  queryRequest.value.current = 1;
  listApiByPage();
};
const handleCurrentChange = (val: number) => {
  queryRequest.value.current = val;
  listApiByPage();
};

onMounted(() => {
  listApiByPage();
});

/**
 * 新增用户
 */
const showAddDialog = ref(false);
const addApiInfo = ref<API.ApiInfoAddRequest>({});

const showAdd = () => {
  showAddDialog.value = true;
};

const closeAdd = () => {
  showAddDialog.value = false;
  addApiInfo.value = {};
};

const confirmAdd = async () => {
  showAddDialog.value = false;
  const res = await addApiInfoUsingPost(addApiInfo.value);
  if (res.code !== 0) {
    return ElMessage.error(res.message);
  }
  addApiInfo.value = {};
  ElMessage.success("添加成功");
  await listApiByPage();
};
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
}
</style>
