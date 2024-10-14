import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PessoaService {

  private url: string = "http://localhost:8080/pessoa";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(`${this.url}`, { observe: 'response' });
  }

}

