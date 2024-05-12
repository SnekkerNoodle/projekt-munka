import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { User } from './shared/menu/user';
import { Message } from './shared/menu/blog';
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private fireStore: AngularFirestore) {

  }

  upload(user: User){
    this.fireStore.collection<User>("users").add(user)
  }

  upload2(message: Message){
    this.fireStore.collection<Message>("messages").add(message)
  }

  getMessages() {
    const messages: Message[] = [];
    this.fireStore
        .collection<Message>("messages")
        .ref.orderBy("topic", "desc").get()
        .then((messageData) => {
          messageData.forEach((message) => {
              messages.push(message.data());
            });
        });
    return messages;
  }
}
