const components = {}
components.welcomPage = `<div class="welcome-container">
<div class="left">  </div>

<div class="start" >
    <button id="start-btn" class=" btn1" type="submit">BẮT ĐẦU</button>
</div>
<button id="sound-btn"></button>
<audio id="main-theme">
<source src="./ảnh/main theme.mp3" type="audio/mpeg">
</audio>
</div>
`

components.startPage = `
<div id="container">
        
        <div id="question-container">
            <div id="question">  Question</div>
            <div id="answer-buttons" class="btn-gird">
            </div>
        </div>

        <div class="controls">
            <button id="next-btn" class="hide">Next</button>
        </div>
        <div id="under"></div>
			<div>
				<div class="prize" id="0">5.000.000</div>
				<div class="prize" id="1">10.000.000</div>
				<div class="prize" id="2">20.000.000</div>
				<div class="prize" id="3">50.000.000</div>
				<div class="prize" id="4">100.000.000</div>
            </div>
            <button id="sound-btn"></button>
            <audio id="main-theme">
                <source src="./ảnh/main theme.mp3" type="audio/mpeg">
            </audio>

    </div>
`

