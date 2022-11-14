<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="message">
      <ion-item>
        <ion-icon v-if="isPlaying == false && message.audio" @click="toggleAudio()" :icon="play" color="primary">
        </ion-icon>
        <ion-icon v-if="isPlaying == true && message.audio" @click="toggleAudio()" :icon="pause" color="primary">
        </ion-icon>
        <ion-label class="ion-text-wrap">
          <h2>
            {{ message.fromName }}
            <span class="date">
              <ion-note v-if="message.audio">{{ convertTime(audio.currentTime) }} /{{ actualTime != 0 ?
                  convertTime(actualTime) : '00:00'
              }}</ion-note>
            </span>
          </h2>
          <h3>Por: <ion-note>{{ message.subject }}</ion-note>
          </h3>
          <ion-range v-if="message.audio" :value=progress :pin="false" @ionKnobMoveEnd="avance"></ion-range>
        </ion-label>

      </ion-item>
      
      <div class="ion-padding">
       
           
              <ion-grid>
                <ion-row>
                  <ion-col
                    size-xs="1"
                    size-s="5"
                    size-md="5"
                    size-lg="5"
                    size-xl="5"
                  >
                  </ion-col>
                  <ion-col
                    size-xs="10"
                    size-s="2"
                    size-md="2"
                    size-lg="2"
                    size-xl="2"
                  >
               

                  <ion-card>
    <img alt="Silhouette of mountains" :src=imagen />
  </ion-card>


                  </ion-col>
                  <ion-col
                    size-xs="1"
                    size-s="5"
                    size-md="5"
                    size-lg="5"
                    size-xl="5"
                  >
                  </ion-col>
                </ion-row>

              </ion-grid>

              <div class="ion-padding" v-html="message.content"></div>
    
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { IonGrid,
  IonRow,
  IonCol,IonCard, IonRange, IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonToolbar, onIonViewDidEnter } from '@ionic/vue';
import { play, pause } from 'ionicons/icons';
import { getMessage } from '../data/messages';
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'ViewMessagePage',

  data() {
    return {
      getBackButtonText: () => {
        const win = window as any;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Tu Biblioteca' : '';
      }
    }
  },
  setup() {
    const route = useRoute();
    const message = getMessage(parseInt(route.params.id as string, 10));
    const audio = ref(new Audio("data:audio/" + message?.audio?.format + ";base64," + message?.audio?.content));
    const imagen = ref<string>("data:image/" + message?.portada?.format+ ";base64," + message?.portada?.content);
    const isPlaying = ref(false);
    const audioDuration = ref(100);
    const playbackTime = ref(0);
    const audioLoaded = ref(false);
    const actualTime = ref(0);
    const progress = ref(0)
    onIonViewDidEnter(async () => {
      setInterval(function () {
        actualTime.value = audio.value.duration - audio.value.currentTime;
        progress.value = (audio.value.currentTime * 100) / audio.value.duration;
        console.log(progress.value)



      }, 1000);
    });




    return {
      message,
      toggleAudio() {
        if (audio.value.paused) {
          audio.value.play();
          isPlaying.value = true;
        } else {
          audio.value.pause();
          isPlaying.value = false;
        }
      }, convertTime(e: number) {
        const h = Math.floor(e / 3600).toString().padStart(2, '0'),
          m = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
          s = Math.floor(e % 60).toString().padStart(2, '0');

        return h + ':' + m + ':' + s;
        //return `${h}:${m}:${s}`;
      },
      imagen,
      actualTime,
      audioDuration,
      audio,
      playbackTime,
      isPlaying,
      avance({ detail }: any) { audio.value.currentTime = audio.value.duration * (detail.value / 100) },
      audioLoaded,
      pause,
      progress,
      play,
    }
  },
  components: {
    IonGrid,
  IonRow,
  IonCol,
    IonCard,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonRange,
    IonToolbar,
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-card {
width:100%;
height:100%;
margin: 0 !important;
padding: 0 !important;
}

ion-card > img {
 width: 100%;
height: 100%;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}
</style>
