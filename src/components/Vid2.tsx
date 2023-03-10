import type { CustomVidI } from "@customTypes/types"
import { createSignal } from "solid-js"
import { playerLoader } from "../store"

interface VidAltI {
  vid: CustomVidI
}
export function VidAlt(props: VidAltI) {
  const options = {
    responsive: true,
    // fluid: true,
    aspectRation: "1:1",
    fill: true,
    controls: true,
    playbackRates: [0.5, 1, 1.5, 2, 2.5],
    preload: "auto",
    autoplay: true
    // html5: {
    //   vhs: {
    //     // GOAL_BUFFER_LENGTH: 50,
    //     experimentalBufferBasedABR: true,
    //   },
    // },
  }
  let el: HTMLDivElement | undefined
  let player: HTMLDivElement | undefined
  const [hasInstantiatedPlayer, setHasInstantiatedPlayer] = createSignal(false)
  // if (!props.x) return
  // const useVisibilityObserver = createVisibilityObserver(
  //   { threshold: 0.1 },
  //   (entry) => {
  //     console.log({ entry })
  //     // do some calculations on the intersection entry
  //     return entry.isIntersecting
  //   }
  // )

  // make sure that you pass the element reference in a thunk if it is undefined initially
  // const visible = useVisibilityObserver(() => el)
  // createEffect(
  //   on([visible, playerLoader, hasInstantiatedPlayer], async () => {
  //     console.log("ON FXN")
  //     const bcpl = playerLoader()
  //     if (visible() && bcpl.loaded && bcpl.module && !hasInstantiatedPlayer()) {
  //       console.log("PLAYER LOADER IS AVAILABLE. setting it locally")
  //       setHasInstantiatedPlayer(true)
  //       // debugger;
  //       await bcpl.module({
  //         refNode: player,
  //         refNodeInsert: "append",
  //         accountId: 6314154063001,
  //         playerId: "9mlrvmAybr",
  //         controls: true,
  //         // embedType: "iframe",
  //         embedType: "in-page",
  //         options,
  //         // playlistId: "ref:benin-new-testament",
  //         // id: 6312743832112,
  //         videoId: props.vid.id,
  //         embedOptions: {
  //           // playlist: true,
  //           responsive: {
  //             aspectRatio: "1:1"
  //           }
  //         }

  //         //   // playlistId: "ref:1745043212224883810",
  //       })
  //     }
  //   })
  // )
  function instantiatePlayer() {
    const bcpl = playerLoader()
    if (bcpl.loaded && bcpl.module && !hasInstantiatedPlayer()) {
      console.log("PLAYER LOADER IS AVAILABLE. setting it locally")
      setHasInstantiatedPlayer(true)
      // debugger;
      bcpl.module({
        refNode: player,
        refNodeInsert: "append",
        accountId: 6314154063001,
        playerId: "9mlrvmAybr",
        controls: true,
        // embedType: "iframe",
        embedType: "in-page",
        options,
        // playlistId: "ref:benin-new-testament",
        // id: 6312743832112,
        videoId: props.vid.id,
        embedOptions: {
          // playlist: true,
          responsive: {
            aspectRatio: "1:1"
          }
        }

        //   // playlistId: "ref:1745043212224883810",
      })
    }
  }

  return (
    <div class="w-full h-full" ref={el} onClick={() => instantiatePlayer()}>
      {/* {props.vid.name} */}
      <h2 class="text-center text-xl">{props.vid.name}</h2>
      {/* {visible() ? "visible" : "not vis"} */}
      <div class="relative">
        <img
          loading="lazy"
          src={props.vid.poster}
          class="border border-red-400 aspect-square w-full object-cover relative h-full"
        />
        <div ref={player} class="h-full w-full absolute z-10 top-0" />
      </div>
    </div>
  )
}
