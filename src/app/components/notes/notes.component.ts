import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  notes: {
    title: string,
    content: string,
    dueTo: string,
    createdOn: string,
    priority: string,
  }[] = [];

  constructor(private dialog: MatDialog) {
    for (let index = 0; index < 10; index++) {
      this.notes.push(this.generateDummyNotes('Dummy title', 'This is the dummy content', 'Monday', new Date().toString(), 'medium'));
    }
    this.notes.push(
      {
        title: 'Mezdra',
        content: 'Sonq Vasi',
        dueTo: 'asdf',
        createdOn: 'asdf',
        priority: 'asdf',
      }
    )
  }

  triggerModal(noteId: number) {
    this.dialog.open(NoteDialogComponent, {
      data: this.notes[noteId]
    });
  }

  generateDummyNotes(title: string, content: string, dueTo: string, createdOn: string, priority: string) {
    return {
      title,
      content,
      dueTo,
      createdOn,
      priority
    }
  }
}
