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

                grad.addColorStop(0, 'rgba(40, 107, 207, 1)');
                grad.addColorStop(1, 'rgba(28, 62, 66, 1)');

                context.fillStyle = grad;
                context.fillRect(0, 0, 0, 200);
            },
            speed: 100,
            scramble: 0.13,
            color: "ff66cc"
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


export default Blob;