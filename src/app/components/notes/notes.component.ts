import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';
import { FormBuilder} from '@angular/forms';

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

  noteForm = this.formBuilder.group({
    'note-title': '',
    'note-content': ''
  });

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder) {
    for (let index = 0; index < 10; index++) {
      this.notes.push(this.generateDummyNotes('Dummy title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Monday', new Date().toString(), 'medium'));
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

  onSubmit(): void {
    console.log(this.noteForm.value);
    this.noteForm.reset();
  }
}
