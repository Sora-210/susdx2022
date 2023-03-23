<template>
  <div>
    <v-row class="py-3 d-flex align-center">
      <h1 style="display: inline-block;">&gt; Format</h1>
      <v-spacer></v-spacer>
      <v-btn
        variant="outlined"
        color="success"
        disabled
      >
        Edit
      </v-btn>
    </v-row>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col>
          <h2>&gt;&gt; 発注書</h2>
          <p>id: {{ $route.params.id }}</p>
        </v-col>
      </v-row>
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="my-2">
                <v-card
                  outlined
                >
                  <v-card-title>Preview</v-card-title>
                  <div class="document">
                    <iframe
                      height="600"
                      class="mb-5"
                      :src="formatUrl"
                    >
                    </iframe>
                  </div>
                </v-card>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="my-2">
              <v-card
                outlined
              >
                <v-card-title>Key Values</v-card-title>
                <div id="list">
                  <div class="list-head list-col">
                    <div>Key</div>
                    <div>Value</div>
                  </div>
                  <div class="list-body">
                    <div class="list-col list-row" v-for="value, key in lists" :key="key">
                      <div><input type="text" :value="key"></div>
                      <div><input type="text" :value="value"></div>
                    </div>
                  </div>
                  <div class="list-row" style="text-align:center;">
                    <v-btn
                      variant="outlined"
                      size="small"
                    >
                      &plus; Add Key Pair
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>      
    </v-container>
    <v-divider></v-divider>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ApiService from '@/service/apiService';

const route = useRoute()
const formatUrl = 'http://localhost:2222/format/' + route.params.id

const lists = ref([])

onMounted(async () => {
  const route = useRoute()
  lists.value = (await ApiService.getFormatKeyValues(Number(route.params.id))).data.keyValues
})
</script>

<style scoped>
iframe {
  transform:scale(0.5);
  -moz-transform:scale(0.5);
  -webkit-transform:scale(0.5);
  -o-transform:scale(0.5);
  -ms-transform:scale(0.5);
  transform-origin:0 0;
  -moz-transform-origin:0 0;
  -webkit-transform-origin:0 0;
  -o-transform-origin:0 0;
  -ms-transform-origin:0 0;
  border:solid 1px;
  margin-bottom:-300px;
  margin-right:-100%;
  width:200%;
}
.document {
  width: 100%;
  height: 300px;
  overflow:hidden;
  -webkit-overflow-scrolling:touch;
}

#list {
  width: 100%;

  border: solid 1px #000;
  border-radius: 5px;
}

.list-col {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  text-align: center;
}

.list-head {
  padding: 5px 0;
  border-bottom: solid 1px #000;
}
.list-head div {
  font-weight: bold;
}

.list-body {
  padding: 5px 0;
}
.list-row {
  padding: 3px 0;
}

input[type="text"] {
  border-bottom: solid 2px #000;
  padding-left: 5px;
}
input[type="text"]:focus {
  outline: none;
  border-bottom: solid 2px #a704b3;
}
</style>
