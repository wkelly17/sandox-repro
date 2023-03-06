import {onMount, createEffect, createSignal, Show} from "solid-js";
import videojs from "video.js";
import videojsPlaylistPlugin from "videojs-playlist";
videojs.registerPlugin("playlist", videojsPlaylistPlugin);

export function VideoPlayer(props: any) {
  let videoRef: any;
  onMount(() => {
    let el = document.querySelector("#vid1");

    if (el) {
      videojs(el, {
        src: "http://bcbolt446c5271-a.akamaihd.net/media/v1/pmp4/static/clear/6314154063001/6d7f5b2b-6065-4e23-918a-bb477ef54472/06e27806-fe43-4a9a-bb01-92fe2b2b955f/main.mp4?akamai_token=exp=1678157832~acl=/media/v1/pmp4/static/clear/6314154063001/6d7f5b2b-6065-4e23-918a-bb477ef54472/06e27806-fe43-4a9a-bb01-92fe2b2b955f/main.mp4*~hmac=c3c2522d12f8855a4decaeb13801ac3d693c689b7802908c11a4e4f312b8609d",
        autoplay: true,
        controls: true,
      });
    }
  });
  return (
    <div>
      <video class="video-js" id="vid1" src="">
        <source src="http://bcbolt446c5271-a.akamaihd.net/media/v1/pmp4/static/clear/6314154063001/6d7f5b2b-6065-4e23-918a-bb477ef54472/06e27806-fe43-4a9a-bb01-92fe2b2b955f/main.mp4?akamai_token=exp=1678157832~acl=/media/v1/pmp4/static/clear/6314154063001/6d7f5b2b-6065-4e23-918a-bb477ef54472/06e27806-fe43-4a9a-bb01-92fe2b2b955f/main.mp4*~hmac=c3c2522d12f8855a4decaeb13801ac3d693c689b7802908c11a4e4f312b8609d" />
      </video>
    </div>
  );
}
