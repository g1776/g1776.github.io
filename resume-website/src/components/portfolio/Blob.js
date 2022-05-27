import DrawBlob, { generatePoints} from 'blob-animated';


const Blob = (props) => {

    const { id } = props;


    let myBlob = null;

    // callback executed when canvas was found
    function handleCanvas(canvas) {
        var myCanvas = document.getElementById(
            id);
        
        myBlob = new DrawBlob({
            vectors: generatePoints({ sides: 5 }),
            canvas: myCanvas,
            colorFunction: context => {
                var grad = context.createRadialGradient(400, 100, 100, 450, 300, 420);

                grad.addColorStop(0, '#aff2fa35'); // lighter color
                grad.addColorStop(1, '#2f7ed435'); // darker color

                context.fillStyle = grad;
                context.fillRect(0, 0, 0, 200);
            },
            speed: 100,
            scramble: 0.13,
        })
    }

    // set up the mutation observer
    var observer = new MutationObserver(function (mutations, me) {
    // `mutations` is an array of mutations that occurred
    // `me` is the MutationObserver instance
    var canvas = document.getElementById(id);
    if (canvas) {
        handleCanvas(canvas);
        me.disconnect(); // stop observing
        return;
    }
    });

    // start observing
    observer.observe(document, {
    childList: true,
    subtree: true
    });

    return myBlob
}


const Blobs = ({pcnt}) => {
    const blobs = [...Array(Math.floor(pcnt)).keys()].map(i => {

            // decide if a blob will be created
             const createBlobAtLocation = Math.random() > 0.3;
             if (!createBlobAtLocation){
                 return null;
             }
       
  
             const isLeft = Math.random() > 0.5;
             const left = isLeft ? Math.random() * 40 : 60 + Math.random() * 40;

              console.log(`${(i+1) * 100}%`)
              return <>
              <canvas
                id={`canvas-${i}`}
                style={{
                  position: "absolute",
                  top: `${(i+1) * 100}%`,
                  left: `${left}%`,
                  width: `${10 + Math.random() * 15}%`,
                }}
              ></canvas>
              <Blob id={`canvas-${i}`} />
              </>
    })

    return <div style={{ zIndex: 1 }}>
        {/* <canvas id="my-canvas" style={{position: "absolute", top: "50%", left: 0, width: "10%"}}></canvas>
            <Blob id="my-canvas"/> */}
        {blobs}
        {/* <canvas
          id="my-canvas2"
          style={{
            position: "absolute",
            top: "500%",
            left: "80%",
            width: "23%",
          }}
        ></canvas>
        <Blob id="my-canvas2" />
        <canvas
          id="my-canvas3"
          style={{
            position: "absolute",
            top: "170%",
            left: "5%",
            width: "10%",
          }}
        ></canvas>
        <Blob id="my-canvas3" />
        <canvas
          id="my-canvas4"
          style={{
            position: "absolute",
            top: "300%",
            left: "3%",
            width: "23%",
          }}
        ></canvas>
        <Blob id="my-canvas4" />
        <canvas
          id="my-canvas5"
          style={{
            position: "absolute",
            top: "500%",
            left: "60%",
            width: "10%",
          }}
        ></canvas>
        <Blob id="my-canvas5" />
        <canvas
          id="my-canvas6"
          style={{
            position: "absolute",
            top: "600%",
            left: "30%",
            width: "20%",
          }}
        ></canvas>
        <Blob id="my-canvas5" /> */}
        
      </div>
}


export default Blobs;