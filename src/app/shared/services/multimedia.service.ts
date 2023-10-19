import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>()

  public trackInfo$:BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio!:HTMLAudioElement
  public timeElapsed$:BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$:BehaviorSubject<string> = new BehaviorSubject('-00:00')

  constructor() { 
    this.audio = new Audio()
    this.trackInfo$.subscribe(responseOK=>{
      if(responseOK){
        this.setAudio(responseOK)
      }     
    })
    this.listenAllEvents()
  }

  private listenAllEvents():void{
    this.audio.addEventListener('timeupdate', this.calculateTime, false)
  }

  private calculateTime = () =>{
    console.log('Disparando evento');
    const {duration, currentTime} = this.audio
    this.setTimeElapsed(currentTime)
    this.setTimeRemaining(currentTime, duration)
  }

  private setTimeElapsed(currentTime:number):void{
    let seconds = Math.floor(currentTime % 60)
    let minutes = Math.floor((currentTime / 60) % 60)
    const displaySeconds = (seconds<10) ? `0${seconds}` : seconds
    const displayMinutes = (minutes<10) ? `0${minutes}` : minutes
    const dispayFormat = `${displayMinutes}:${displaySeconds}`
    this.timeElapsed$.next(dispayFormat)
  }

  private setTimeRemaining(currentTime:number, duration:number):void{
    let timeLeft = duration - currentTime
    let seconds = Math.floor(timeLeft % 60)
    let minutes = Math.floor((timeLeft / 60) % 60)
    const displaySeconds = (seconds<10) ? `0${seconds}` : seconds
    const displayMinutes = (minutes<10) ? `0${minutes}` : minutes
    const dispayFormat = `-${displayMinutes}:${displaySeconds}`
    this.timeRemaining$.next(dispayFormat)
  }

  public setAudio(track:TrackModel):void{
    console.log('track:', track);
    this.audio.src = track.url
    this.audio.play()
  }
}
