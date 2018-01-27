window.onload=function(){
		video.init();
    }
    var myvideo=document.getElementById("video");
	var start=document.querySelector('.icon-bofang');
	var currTime=document.querySelector('.currTime');
	var allTime=document.querySelector('.allTime');

	var pro_bg=document.querySelector('.pro_bg');
	var bar=document.querySelector('.bar');

    var shengyin=document.querySelector(".icon-shengyin");
    var quanping=document.querySelector(".icon-quanping");
    

	var video={
		init:function(){
			currTime.innerHTML=initTimeLength(myvideo.currentTime);
	    	allTime.innerHTML=initTimeLength(myvideo.duration);
		},
		play:function play(){ //播放视频
			myvideo.play();
		},
		pause:function pause(){ //暂停视频
			myvideo.pause();
		},
	    closeMute:function(){//关闭声音
	        myvideo.muted=true;
	    },
	    openMute:function(){//打开声音
	    	 myvideo.muted=false;
	     //    btn[0].disabled=false;
	     //    btn[1].disabled=true;
	    },
	    showFull:function(){ //全屏
	    	//myvideo.webkitEnterFullscreen();
	    	//W3C
			if(myvideo.requestFullscreen){
				myvideo.requestFullscreen();
			}
			//FireFox
			else if (myvideo.mozRequestFullScreen) {
				myvideo.mozRequestFullScreen();
			}
			//Chrome等
			else if (myvideo.webkitRequestFullScreen) {
				myvideo.webkitRequestFullScreen();
			}
			//IE11
			else if (myvideo.msRequestFullscreen) {
				myvideo.msRequestFullscreen();
			}
	    },
	    progressBar:function(){//进度条展示
	    	pro.max=myvideo.duration;
        	pro.value=myvideo.currentTime;
	    },
	    setVolume:function(){//拖动range进行调音量大小
	    	myvideo.volume=ran.value/100;
       		myvideo.muted=false;
	    }
	};
	var initTimeLength = function(timeLength){ //根据秒数格式化时间
        timeLength = parseInt(timeLength);
        var second = timeLength%60;
        var minute = (timeLength-second)/60;
        return (minute<10?"0"+minute:minute)+":"+(second<10?"0"+second:second);
    }

	var onOff=true;
	start.addEventListener('click',function(){
		if(onOff){
			video.play();
			this.classList.remove('icon-bofang');
			this.classList.add('icon-weibiaoti519');
		}else{
			video.pause();
			this.classList.remove('icon-weibiaoti519');
			this.classList.add('icon-bofang');
		}
		onOff=!onOff;//取反
	});
	shengyin.addEventListener('click',function(){
		if(onOff){
			video.closeMute();
			this.classList.remove('icon-shengyin');
			this.classList.add('icon-jingyin');
		}else{
			video.openMute();
			this.classList.remove('icon-jingyin');
			this.classList.add('icon-shengyin');
		}
		onOff=!onOff;//取反
	});
	// quanping.addEventListener('click',video.showFull());
	quanping.onclick=function(){
		video.showFull();
	};
	myvideo.addEventListener('timeupdate',function(){
		//当前时间/总时间=播放的长度/总的长度
		var s=this.currentTime/this.duration;
		bar.style.left=s*680+'px';
		pro_bg.style.width=20+s*680+'px';
		currTime.innerHTML=initTimeLength(this.currentTime);
		allTime.innerHTML=initTimeLength(this.duration);
	});