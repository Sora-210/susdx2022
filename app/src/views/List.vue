<template>
  <div>
    <h1>&gt; FileList</h1>
    <v-divider></v-divider>
    <v-container class="mt-3">
      <v-row>
        <table id="list">
          <thead>
            <tr>
              <th>Action</th>
              <th>FileName</th>
              <th>Upload Date</th>
              <th>COMPANY Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in lists" :key="row.id" class="my-2">
              <td><input type="checkbox"></td>
              <td>{{ row.name }}</td>
              <td>{{ row.date }}</td>
              <td>{{ row.company }}</td>
              <td>
                <v-chip
                  small
                  :color="chips[row.status].color"
                  outlined
                >
                  {{ chips[row.status].text }}
                </v-chip>
              </td>
            </tr>
          </tbody>
        </table>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const chips = ref({
  success: {
    color: "success",
    text: "Success"
  },
  processing: {
    color: "deep-purple accent-4",
    text: "Processing"
  },
  comfirm: {
    color: "warning",
    text: "Comfirm"
  },
  error: {
    color: "error",
    text: "Error"
  },
})

const lists = ref([
  {
    id: "sdfghjukjmnbvfghj",
    name: "File1",
    date: "2023/01/01",
    company: "XYZ",
    status: "success"
  },
  {
    id: "mnhuikmnbhuikmn",
    name: "File2",
    date: "2023/03/01",
    company: "ABC",
    status: "processing"
  },
  {
    id: "iuygvbnjhgbnj",
    name: "File3",
    date: "2023/03/01",
    company: "Test",
    status: "comfirm"
  },
  {
    id: "cdrtghjikaloiuyt",
    name: "File4",
    date: "2023/04/01",
    company: "Enter",
    status: "error"
  },
])
</script>

<style>
#list {
  width: 100%;
  padding: 5px;

  border: solid 1px #000;
  border-radius: 5px;
}

#list thead {
  padding-bottom: 10px;
  border-bottom: solid 1px #000;
}

#list td {
  text-align: center;
}
</style>
