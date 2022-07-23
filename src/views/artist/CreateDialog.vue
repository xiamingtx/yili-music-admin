<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-23 08:43:17
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-23 10:53:28
-->
<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 350px; padding: 20px 0">
      <q-card-section>
        <div class="text-h6">添加音乐人</div>
      </q-card-section>
      <q-form
        @submit="isEdit ? editArtist() : createArtist()"
        class="q-gutter-md"
      >
        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="artist.name"
            label="歌手名"
            autofocus
            @keyup.enter="show = false"
            :rules="[val => (val && val.length > 0) || '请填写音乐人名字']"
          />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="artist.remark"
            label="歌手备注"
            autofocus
            @keyup.enter="show = false"
          />
        </q-card-section>

        <q-card-section>
          <uploader label="上传音乐人照片" v-model:file="artist.photo" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn label="确认" type="submit" color="primary" />
          <q-btn flat label="取消" v-close-popup />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { create, update } from '../../api/artist'
import notify from '../../utils/notify'
import { ref, reactive } from 'vue'
import { useCreateUser } from '../../composables/useCreateUser'
import Uploader from '../../components/Uploader.vue'

const props = defineProps({
  data: {
    type: Object,
    default() {
      return null
    }
  }
})

const show = ref(true)

const isEdit = ref(Boolean(props.data))

const artist = reactive(props.data || { name: '', remark: '', photo: null })

const emits = defineEmits(['create-success', 'edit-success'])

const createArtist = () => {
  create({
    name: artist.name,
    remark: artist.remark,
    photoId: artist.photo.id
  }).then(createdArtist => {
    notify.success(`歌手《${createdArtist.name}》创建成功!`)
    show.value = false
    emits('create-success')
  })
}

const editArtist = () => {
  update(artist.id, {
    name: artist.name,
    remark: artist.remark,
    photoId: artist.photo.id
  }).then(updatedArtist => {
    notify.success(`歌手《${updatedArtist.name}》更新成功!`)
    show.value = false
    emits('edit-success')
  })
}
</script>

<style lang=""></style>
