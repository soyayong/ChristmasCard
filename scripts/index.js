var app = new App({
  data: {
    is_show: 1
  },
  // watch:{
  //   is_show:function(val){
  //     console.log(val)
  //   }
  // },
  mounted: function() {
    this.page = 'card'
    var that = this;

    this.bgm = new Audio
		this.bgm.loop = true
		this.bgm.preload = true
		this.bgm.autoplay = true
		this.bgm.src = './content/music/bgm.mp3'

		wx.ready(function(){
			that.bgm.play()
		})
  },
  methods:{
    Music:function(){
			this.bgm.play()
		}
  }
})
