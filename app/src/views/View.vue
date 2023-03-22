<template>
  <div>
    <h1>> View</h1>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col>
          <h2>{{ fileName }}</h2>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-btn
            variant="outlined"
            color="error"
            active=false
          >
            PDF Download
          </v-btn>
          <v-btn
            variant="outlined"
            color="success"
            :active="isCSV"
          >
            CSV Download
          </v-btn>
        </v-col>
      </v-row>
      <v-container>
        <div class="my-2">
          <h3>Image</h3>
          <v-row
            class="my-3"
          >
            <v-col cols="6">
              <v-card
                outlined
              >
                <v-card-title>Original</v-card-title>
                <img
                  src="../assets/old.png"
                  alt="defaultImage"
                  class="mb-5 document"
                >
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card
                outlined
              >
                <v-card-title>Changing</v-card-title>
                <img
                  src="../assets/new.png"
                  alt="newImage"
                  class="mb-5 document"
                >
              </v-card>
            </v-col>
          </v-row>
        </div>
        <v-divider></v-divider>
        <div class="my-2">
          <h3>OCR Datas</h3>
          <div id="list">
            <div class="list-head list-col">
              <div>Key</div>
              <div>Value</div>
              <div>Formated Key</div>
            </div>
            <div class="list-body">
              <div class="list-col list-row" v-for="row, index in datas" :key="index">
                <div>{{ row.key }}</div>
                <div>{{ row.value }}</div>
                <div>
                  <select>
                    <option>company[企業名]</option>
                    <option>title[件名]</option>
                    <option>promise[納期]</option>
                    <option>date[発注日]</option>
                    <option>table[発注表]</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'View',
  data() {
      return {
          fileName: "Test.png",
          status: 0,
          isPDF: false,
          isCSV: false,
          datas: [
              {
                  "key": "testKey",
                  "value": "testValue"
              }
          ]
      }
  }
}
</script>

<style scoped>
.document {
  width: 100%;
}

#list {
  width: 100%;
  margin: 5px;

  border: solid 1px #000;
  border-radius: 5px;
}

.list-col {
  display: grid;
  grid-template-columns: repeat(3, 33%);
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

select {
  border: solid 1px #000;
  padding: 0 5px;
}
select::before {
  content: "&#9650;"
}
</style>
