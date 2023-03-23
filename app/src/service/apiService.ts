import http from "@/service/http"

class ApiService {
    getFormatList(): Promise<any> {
        return http.get("/format")
    }
    getFormatKeyValues(id: Number): Promise<any> {
        return http.get("/format/" + String(id) + "/key")
    }
}

export default new ApiService();
