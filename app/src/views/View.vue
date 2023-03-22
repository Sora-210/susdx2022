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
          <h3>Datas</h3>
          <v-row>
            <table id="list">
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TestKey</td>
                  <td>TestValue</td>
                </tr>
                <!-- <tr v-for="row in lists" :key="row.id" class="my-2">
                  <td><input type="checkbox"></td>
                  <td>{{ row.name }}</td>
                </tr> -->
              </tbody>
            </table>
          </v-row>
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
          data: [
              {
                  "key": "testKey",
                  "value": "testValue"
              }
          ]
      }
  }
}
</script>

<style>
.document {
  width: 100%;
}

#list {
  width: 100%;
  padding: 5px;

  border-radius: 5px;
}

#list thead {
  padding-bottom: 10px;
  border-bottom: solid 1px fff;
}

#list td {
  text-align: center;
}
</style>
