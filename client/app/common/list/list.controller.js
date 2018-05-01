class ListController {
    constructor() {
        this.songs = [
          {name: 'SoundHelix Song 1', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},
          {name: 'SoundHelix Song 2', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
          {name: 'SoundHelix Song 3', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"},
          {name: 'SoundHelix Song 4', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"},
          {name: 'SoundHelix Song 5', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"},
          {name: 'SoundHelix Song 6', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"},
          {name: 'SoundHelix Song 7', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
          {name: 'SoundHelix Song 8', adress: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"}
        ];
        
        removeItem = (song) => {
          var answer = confirm("Are you sure to delete a song?")
          if (answer==true) {
            var index = this.songs.indexOf(song);    
            this.songs.splice(index, 1);
          }
        }
    }
    
}

export default ListController;