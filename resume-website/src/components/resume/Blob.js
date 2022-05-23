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


const Blobs = () => {
    return <div style={{ zIndex: 1 }}>
        {/* <canvas id="my-canvas" style={{position: "absolute", top: "50%", left: 0, width: "10%"}}></canvas>
            <Blob id="my-canvas"/> */}
        <canvas
          id="my-canvas2"
          style={{
            position: "absolute",
            top: "100%",
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
      </div>
}


export default Blobs;