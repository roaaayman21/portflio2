import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submissionStatus: string | null = null;
  submissionMessage: string = '';

  onSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        this.submissionStatus = 'success';
        this.submissionMessage = 'Message sent successfully!';
        form.reset();
      } else {
        this.submissionStatus = 'error';
        this.submissionMessage = 'There was an error sending your message. Please try again later.';
      }
    }).catch(() => {
      this.submissionStatus = 'error';
      this.submissionMessage = 'There was an error sending your message. Please try again later.';
    });
  }
}
