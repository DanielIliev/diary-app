import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class NoteDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, content: string, dueTo: string, createdOn: string, priority: string }) { }

  ngOnInit(): void {

  }
}