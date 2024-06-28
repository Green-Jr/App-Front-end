import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/notes`);
  }

  addNote(note: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/notes`, note);
  }

  updateNoteStatus(id: string, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/notes/${id}`, { status });
  }

  deleteNote(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/notes/${id}`);
  }
}
