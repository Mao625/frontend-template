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
          <el-button type="primary" @click="listClientInfoByPage"
            >查询</el-button
          >
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
        :data="pageClientInfoList?.records"
        style="width: 100%"
        table-layout="auto"
      >
        <el-table-column fixed type="index" :index="1" />
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="publicKey" label="公钥" />
        <el-table-column prop="allowedUrls" label="许访问URL" />
        <el-table-column label="状态">
          <template #default="scope">
            {{ scope.row.status === 1 ? "开启" : "关闭" }}
          </template>
        </el-table-column>
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
        v-model:current-page="pageClientInfoList.current"
        v-model:page-size="pageClientInfoList.size"
        :page-sizes="[5, 10, 15, 20]"
        :small="false"
        :disabled="false"
        :background="false"
        layout="total, sizes, prev, pager, next, jumper"
        :page-count="parseInt(pageClientInfoList.pages)"
        :total="parseInt(pageClientInfoList.total)"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
    <!--  编辑信息对话框-->
    <el-dialog
      v-model="editFormVisible"
      title="编辑API接入方"
      style="width: 580px"
    >
      <el-form :model="currentClient">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="currentClient.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="公钥" :label-width="formLabelWidth">
          <el-input v-model="currentClient.publicKey" autocomplete="off" />
        </el-form-item>
        <el-form-item label="允许访问的URL" :label-width="formLabelWidth">
          <el-input v-model="currentClient.allowedUrls" autocomplete="off" />
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-select v-model="currentClient.status" placeholder="Select">
            <el-option
              v-for="gender in genderOptions"
              :key="gender.value"
              :label="gender.label"
              :value="gender.value"
            />
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
      title="新增API接入方"
      width="30%"
      center
      draggable
    >
      <el-form
        label-position="right"
        label-width="80px"
        :model="addClientInfo"
        style="max-width: 460px"
      >
        <el-form-item label="名称">
          <el-input v-model="addClientInfo.name" />
        </el-form-item>
        <el-form-item label="公钥">
          <el-input v-model="addClientInfo.publicKey" />
        </el-form-item>
        <el-form-item
          label="允许访问的URL"
          aria-placeholder="多个之间用英文逗号分割"
        >
          <el-input v-model="addClientInfo.allowedUrls" />
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            v-model="addClientInfo.status"
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
import {
  addClientInfoUsingPost,
  deleteClientInfoUsingPost,
  listClientInfoByPageUsingPost,
  updateClientInfoUsingPost
} from "@/api/clientInfoController";

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

const pageClientInfoList = ref<API.PageClientInfo>({
  current: 0,
  pages: 0,
  records: undefined,
  size: 0,
  total: 0
});

// 初始化api数据
const listClientInfoByPage = async () => {
  const { sortField, sortOrder } = queryRequest.value;
  if (Boolean(sortField) !== Boolean(sortOrder)) {
    return ElMessage.error("请同时设置排序条件和排序字段");
  }
  const res = await listClientInfoByPageUsingPost(queryRequest.value);
  if (res.code === 0) {
    pageClientInfoList.value = res.data;
  } else {
    message(res.message, { type: "error" });
  }
};

/**
 * 充值查询
 */
const resetQuery = () => {
  queryRequest.value = {};
  listClientInfoByPage();
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
      const res = await deleteClientInfoUsingPost(deleteApiVO.value);
      if (res.code === 0) {
        message("删除成功", { type: "success" });
        await listClientInfoByPage();
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
const currentClient = ref<API.ClientInfoUpdateRequest>({});

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
  currentClient.value = Object.assign({}, api);
};
// 取消修改
const cancelEdit = () => {
  editFormVisible.value = false;
  currentClient.value = {};
};
// 确认修改
const confirmEdit = async () => {
  const res = await updateClientInfoUsingPost(currentClient.value);
  if (res.code === 0) {
    message("修改成功", { type: "success" });
    await listClientInfoByPage();
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
  listClientInfoByPage();
};
const handleCurrentChange = (val: number) => {
  queryRequest.value.current = val;
  listClientInfoByPage();
};

onMounted(() => {
  listClientInfoByPage();
});

/**
 * 新增用户
 */
const showAddDialog = ref(false);
const addClientInfo = ref<API.ClientInfoAddRequest>({});

const showAdd = () => {
  showAddDialog.value = true;
};

const closeAdd = () => {
  showAddDialog.value = false;
  addClientInfo.value = {};
};

const confirmAdd = async () => {
  showAddDialog.value = false;
  const res = await addClientInfoUsingPost(addClientInfo.value);
  if (res.code !== 0) {
    return ElMessage.error(res.message);
  }
  addClientInfo.value = {};
  ElMessage.success("添加成功");
  await listClientInfoByPage();
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
