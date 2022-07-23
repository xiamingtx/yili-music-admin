<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-23 08:37:45
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-23 10:43:41
-->
<template>
  <div class="page">
    <div class="q-mt-md q-mb-md">
      <q-btn
        color="primary"
        label="添加歌曲"
        @click="createDialog.showDialog"
      />
    </div>
    <q-table :columns="columns" :rows="data" row-key="id">
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <q-badge
            :color="artistStatusColor[props.value]"
            outline
            :label="artistStatus[props.value]"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-photo="props">
        <q-td :props="props">
          <q-avatar v-if="props.value" :props="props">
            <img :src="props.value.uri" alt="" />
          </q-avatar>
        </q-td>
      </template>
      <template v-slot:body-cell-operation="props">
        <q-td :props="props">
          <q-btn-dropdown
            size="sm"
            split
            color="primary"
            label="编辑"
            @click="edit(props.row)"
          >
            <q-list dense>
              <q-item
                v-if="props.row.status !== 'PUBLISHED'"
                clickable
                v-close-popup
                @click="publishMusic(props.row.id)"
              >
                <q-item-section>
                  <q-item-label>上架</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                v-if="props.row.status === 'PUBLISHED'"
                clickable
                v-close-popup
                @click="closeMusic(props.row.id)"
              >
                <q-item-section>
                  <q-item-label>下架</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-td>
      </template>
    </q-table>
    <create-dialog
      v-if="createDialogShow"
      :data="editRow"
      @hide="onHide"
      @create-success="fetchData"
      @edit-success="fetchData"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useToggleDialog } from '../../composables/useToggleDialog'
import CreateDialog from './CreateDialog.vue'
import { artistStatus, artistStatusColor } from '../../utils/dict'
import { list } from '../../api/artist'

const columns = [
  {
    name: 'name',
    field: 'name',
    label: '歌手名'
  },
  {
    name: 'remark',
    field: 'remark',
    label: '备注'
  },
  {
    name: 'photo',
    field: 'photo',
    label: '照片'
  },
  {
    name: 'status',
    field: 'status',
    align: 'center',
    label: '上架状态'
  },
  {
    name: 'operation',
    field: 'operation',
    label: '操作'
  }
]

const createDialogShow = ref(false)

const createDialog = useToggleDialog(createDialogShow)

const data = ref([])

const editRow = ref(null)

const edit = row => {
  editRow.value = row
  createDialog.showDialog()
}

const fetchData = () => {
  list().then(artistList => {
    data.value = artistList
  })
}

onMounted(fetchData)

const onHide = () => {
  createDialog.hideDialog()
  editRow.value = null
}
</script>
<style lang=""></style>
