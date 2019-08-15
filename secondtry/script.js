
  var isSyncingLeftScroll = false;
  var isSyncingRightScroll = false;
  var leftDiv = document.getElementById('firstList');
  var rightDiv = document.getElementById('secondList');

  leftDiv.onscroll = function() {
    if (!isSyncingLeftScroll) {
      isSyncingRightScroll = true;
      rightDiv.scrollTop = parseInt(rightDiv.scrollHeight)
      rightDiv.scrollTop = rightDiv.scrollTop - this.scrollTop;
    }
    isSyncingLeftScroll = false;
  }

  rightDiv.onscroll = function() {
    if (!isSyncingRightScroll) {
      isSyncingLeftScroll = true;
      leftDiv.scrollTop = parseInt(leftDiv.scrollHeight)
      leftDiv.scrollTop = leftDiv.scrollTop - this.scrollTop;
    }
    isSyncingRightScroll = false;
  }