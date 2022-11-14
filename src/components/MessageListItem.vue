<template>
  <ion-item v-if="message" :routerLink="'/message/' + message.id" :detail="false" class="list-item">
    <ion-icon class="dot" :icon="bookOutline" color="dark"></ion-icon>
    <ion-label class="ion-text-wrap">
      <h2>
        {{ message.fromName }}
        <span class="date">
          <ion-note> {{ message.audio != undefined ? "Duración: " + message.audio.duration : "Sin audio" }}</ion-note>
          <ion-icon :icon="chevronForward" size="small" v-if="isIos()"></ion-icon>
        </span>
      </h2>
      <h3>Autor: {{ message.subject }}</h3>
      <p>
        
      </p>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { IonIcon, IonItem, IonLabel, IonNote } from '@ionic/vue';
import { chevronForward , bookOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MessageListItem',
  components: {
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
  },
  props: {
    message: Object,
  },
  methods: {
    isIos: () => {
      const win = window as any;
      return win && win.Ionic && win.Ionic.mode === 'ios';
    }
  },
  data() {
    return { chevronForward, bookOutline, }
  }
});
</script>

<style scoped>
.list-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}

.list-item ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

.list-item  h2 {
  font-weight: 600;
  margin: 0;
}

.list-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
}

.list-item .date {
  float: right;
  align-items: center;
  display: flex;
}

.list-item ion-icon {
  color: #000;
}

.list-item ion-note {
  font-size: 15px;
  margin-right: 8px;
  font-weight: normal;
}

.list-item ion-note.md {
  margin-right: 14px;
}

.list-item .dot {
  display: block;
  height: 20px;
  width: 20px;
  margin: 16px 10px 16px 16px;
}

.list-item .dot-unread {
  background: var(--ion-color-primary);
}
</style>