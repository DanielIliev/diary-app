import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  options = this._formBuilder.group({
    bottom: 0,
    fixed: true,
    top: 0,
  });

  notes: {
    title: string,
    content: string,
    createdOn: object,
  }[] = [];

  hasNotes = false;

  noteForm = this.formBuilder.group({
    'note-title': '',
    'note-content': ''
  });

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    console.log("component has been initialized!");
    if (this.notes.length === 0) {
      this.hasNotes = false;
    }
    // for (let index = 0; index < 20; index++) {
    //   this.notes.push(this.generateDummyNotes('Dummy title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Monday', new Date().toString(), 'medium'));
    // }
  }

  triggerModal(noteId: number) {
    this.dialog.open(NoteDialogComponent, {
      data: this.notes[noteId]
    });
  }

  // generateDummyNotes(title: string, content: string, dueTo: string, createdOn: string, priority: string) {
  //   return {
  //     title,
  //     content,
  //     dueTo,
  //     createdOn,
  //     priority
  //   }
  // }

  onSubmit(): void {
    let title = this.noteForm.controls['note-title'].value;
    let content = this.noteForm.controls['note-content'].value;

    if (!title || !content) {
      console.warn('Empty title or content!');
      alert('Please add a title and content for your note');
    } else {
      // console.log(title, content);
      this.notes.push({
        'title': title,
        'content': content,
        'createdOn': new Date()
      });
      this.hasNotes = true;
    }

    this.noteForm.reset();
  }
}
