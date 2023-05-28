import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Preload(props) {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    axios.get('/data' + window.location.search)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(error => console.log(error))
  }, []);

  function loadImage(imageUrl, onprogress) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      var notifiedNotComputable = false;
      xhr.open('GET', imageUrl, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(ev) {
        if (ev.lengthComputable) {
          onprogress(parseInt((ev.loaded / ev.total) * 100));
        } else {
          if (!notifiedNotComputable) {
            notifiedNotComputable = true;
            onprogress(-1);
          }
        }
      }
      xhr.onloadend = function() {
        if (!xhr.status.toString().match(/^2/)) {
          reject(xhr);
        } else {
          if (!notifiedNotComputable) {
            onprogress(100);
          }
          var options = {}
          var headers = xhr.getAllResponseHeaders();
          var m = headers.match(/^Content-Type\:\s*(.*?)$/mi);
          if (m && m[1]) {
            options.type = m[1];
          }
          var blob = new Blob([this.response], options);
          resolve(window.URL.createObjectURL(blob));
        }
      }
      xhr.send();
    });
  }

  var imgContainer = document.getElementById('imgcont');
  var progressBar = document.getElementById('progress');
  var imageUrl = data[0];

  loadImage(imageUrl, (ratio) => {
    if (ratio == -1) {
      progressBar.removeAttribute('value');
    } else {
      progressBar.value = ratio;
    }
  })
  .then(imgSrc => {
    imgContainer.src = imgSrc;
  }, xhr => {});

  return (
    <progress id="progress" value="0" max="100" style="width: 100%;"></progress>
    <img id="imgcont" />
  )
  
};

export default Dialogue;