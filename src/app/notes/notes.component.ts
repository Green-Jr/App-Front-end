import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: any[] = [];

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.notesService.getNotes().subscribe({
      next: (data: any) => {
        this.notes = data;
      },
      error: (error: any) => {
        alert('Failed to load notes');
      }
    });
  }

  addNote() {
    const newNote = { content: 'New Note', status: 'pending' };
    this.notesService.addNote(newNote).subscribe({
      next: (data: any) => {
        this.notes.push(data);
      },
      error: (error: any) => {
        alert('Failed to add note');
      }
    });
  }

  updateNoteStatus(note: any, status: string) {
    this.notesService.updateNoteStatus(note._id, status ).subscribe({
      next: (data: any) => {
        note.status = status;
      },
      error: (error: any) => {
        alert('Failed to update note status');
      }
    });
  }

  deleteNote(note: any) {
    this.notesService.deleteNote(note._id).subscribe({
      next: () => {
        this.notes = this.notes.filter(n => n._id !== note._id);
      },
      error: (error: any) => {
        alert('Failed to delete note');
      }
    });
  }

  toggleStatus(note: any) {
    const newStatus = note.status === 'pending' ? 'completed' : 'pending';
    this.updateNoteStatus(note, newStatus);
  }
}
