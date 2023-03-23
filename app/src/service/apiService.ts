import http from "@/service/http"

class ApiService {
    getFormatList(): Promise<any> {
        return http.get("/format")
    }
}

export default new ApiService();
