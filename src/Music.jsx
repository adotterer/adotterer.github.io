import Container from "./Container";
import coffeeImg from "./support-buy-coffee.png";

const audioArr = [
  "https://mshippoboe.s3.us-west-1.amazonaws.com/AD+Recital+2+Telemann+1.mp3",
  "https://mshippoboe.s3.us-west-1.amazonaws.com/AD+Recital+2+Telemann+2.mp3",
  "https://mshippoboe.s3.us-west-1.amazonaws.com/AD+Recital+2+Telemann+3.mp3",
  "https://mshippoboe.s3.us-west-1.amazonaws.com/AD+Recital+2+Telemann+4.mp3",
  "https://mshippoboe.s3.us-west-1.amazonaws.com/AD+Recital+2+Mozart+1.mp3",
  "https://mshippoboe.s3.us-west-1.amazonaws.com/AD+Recital+2+Mozart+2.mp3",
  "https://mshippoboe.s3.us-west-1.amazonaws.com/AD+Recital+2+Mozart+3.mp3",
  "https://mshippoboe.s3.us-west-1.amazonaws.com/Sibelius+II.mp3",
  "https://mshippoboe.s3.us-west-1.amazonaws.com/Sibelius+III.mp3",
  "https://mshippoboe.s3.us-west-1.amazonaws.com/1+Rossini+Italian+Girl+Overt.mp3",
  "https://mshippoboe.s3.us-west-1.amazonaws.com/maw_holst_venus.mp3",
  "https://mshippoboe.s3.us-west-1.amazonaws.com/maw_holst_mercury.mp3",
  "https://mshippoboe.s3.us-west-1.amazonaws.com/temple_barber1.mp3",
];
export default function Music() {
  return (
    <div className="music_container">
      <Container>
        <figcaption className="audio__title_composer">
          <span className="audio_title">Planets: Venus (fragment)</span>
          <div>
            <span className="black__bg composer">Gustav Holst</span>
          </div>
        </figcaption>

        <audio controls src={audioArr[10]}></audio>

        <figcaption className="audio__performers">
          <span className="black__bg">
            Music Academy of the West Orchestra <br /> Andrew Dotterer oboe I
            (live)
          </span>
        </figcaption>
      </Container>

      <Container>
        <figcaption className="audio__title_composer">
          <span className="audio_title">Planets: Mercury(fragment)</span>
          <div>
            <span className="black__bg composer">Gustav Holst</span>
          </div>
        </figcaption>

        <audio controls src={audioArr[11]}></audio>

        <figcaption className="audio__performers">
          <span className="black__bg">
            Music Academy of the West Orchestra <br /> Andrew Dotterer oboe I
            (live)
          </span>
        </figcaption>
      </Container>

      <Container>
        <figcaption className="audio__title_composer">
          <span className="audio_title">
            Symphony no. 5 II. Andante mosso, quasi allegretto
          </span>
          <div>
            <span className="black__bg composer">Jean Sibelius</span>
          </div>
        </figcaption>

        <audio controls src={audioArr[7]}></audio>

        <figcaption className="audio__performers">
          <span className="black__bg">
            Music Academy of the West Orchestra <br /> Andrew Dotterer oboe I
            (live)
          </span>
        </figcaption>
      </Container>

      <Container>
        <figcaption className="audio__title_composer">
          <span className="audio_title">Symphony no. 5 III. Allegro molto</span>
          <div>
            <span className="black__bg composer">Jean Sibelius</span>
          </div>
        </figcaption>

        <audio controls src={audioArr[8]}></audio>

        <figcaption className="audio__performers">
          <span className="black__bg">
            Music Academy of the West Orchestra <br /> Andrew Dotterer oboe I
            (live)
          </span>
        </figcaption>
      </Container>

      <Container>
        <figcaption className="audio__title_composer">
          <span className="audio_title">
            The Italian Girl in Algiers Overture
          </span>
          <div>
            <span className="black__bg composer">Gioachino Rossini</span>
          </div>
        </figcaption>

        <audio controls src={audioArr[9]}></audio>

        <figcaption className="audio__performers">
          <span className="black__bg">
            Music Academy of the West Orchestra <br /> Andrew Dotterer oboe I
            (live)
          </span>
        </figcaption>
      </Container>

      <Container>
        <figcaption className="audio__title_composer">
          <span className="audio_title">Symphony No. 1 (fragment) </span>
          <div>
            <span className="black__bg composer">Samuel Barber</span>
          </div>
        </figcaption>

        <audio controls src={audioArr[12]}></audio>

        <figcaption className="audio__performers">
          <span className="black__bg">
            Temple University Orchestra <br /> Andrew Dotterer oboe I (live)
          </span>
        </figcaption>
      </Container>

      <Container>
        <figcaption className="audio__title_composer">
          <span className="audio_title">
            Fantasia No. 2 in A Minor I. Grave
          </span>
          <div>
            <span className="black__bg composer">Georg Philipp Telemann</span>
          </div>
        </figcaption>

        <audio controls src={audioArr[0]}></audio>

        <figcaption className="audio__performers">
          <span className="black__bg">Andrew Dotterer, oboe (live)</span>
        </figcaption>
      </Container>

      <Container>
        <figcaption className="audio__title_composer">
          <span className="audio_title">
            Fantasia No. 2 in A Minor II. Vivave
          </span>
          <div>
            <span className="black__bg composer">Georg Philipp Telemann</span>
          </div>
        </figcaption>

        <audio controls src={audioArr[1]}></audio>

        <figcaption className="audio__performers">
          <span className="black__bg">Andrew Dotterer, oboe (live)</span>
        </figcaption>
      </Container>

      <Container>
        <figcaption className="audio__title_composer">
          <span className="audio_title">
            Fantasia No. 2 in A Minor III. Adagio
          </span>
          <div>
            <span className="black__bg composer">Georg Philipp Telemann</span>
          </div>
        </figcaption>

        <audio controls src={audioArr[2]}></audio>

        <figcaption className="audio__performers">
          <span className="black__bg">Andrew Dotterer, oboe (live)</span>
        </figcaption>
      </Container>

      <Container>
        <figcaption className="audio__title_composer">
          <span className="audio_title">
            Fantasia No. 2 in A Minor IV. Allegro
          </span>
          <div>
            <span className="black__bg composer">Georg Philipp Telemann</span>
          </div>
        </figcaption>

        <audio controls src={audioArr[3]}></audio>

        <figcaption className="audio__performers">
          <span className="black__bg">Andrew Dotterer, oboe (live)</span>
        </figcaption>
      </Container>

      <Container>
        <figcaption className="audio__title_composer">
          <span className="audio_title">
            Oboe Concerto in C Major 1. Allegro aperto
          </span>
          <div>
            <span className="black__bg composer">Wolfgang Amadeus Mozart</span>
          </div>
        </figcaption>

        <audio controls src={audioArr[4]}></audio>

        <figcaption className="audio__performers">
          <span className="black__bg">
            Andrew Dotterer, oboe (live) <br /> (Cadenzas by Andrew)
          </span>
        </figcaption>
      </Container>

      <Container>
        <figcaption className="audio__title_composer">
          <span className="audio_title">
            Oboe Concerto in C Major 2. Adagio non troppo
          </span>
          <div>
            <span className="black__bg composer">Wolfgang Amadeus Mozart</span>
          </div>
        </figcaption>

        <audio controls src={audioArr[5]}></audio>

        <figcaption className="audio__performers">
          <span className="black__bg">Andrew Dotterer, oboe (live)</span>
        </figcaption>
      </Container>

      <Container>
        <figcaption className="audio__title_composer">
          <span className="audio_title">
            Oboe Concerto in C Major 3. Rondo : Allegretto
          </span>
          <div>
            <span className="black__bg composer">Wolfgang Amadeus Mozart</span>
          </div>
        </figcaption>

        <audio controls src={audioArr[6]}></audio>

        <figcaption className="audio__performers">
          <span className="black__bg">Andrew Dotterer, oboe (live)</span>
        </figcaption>
      </Container>
      <Container>
        {" "}
        <span className="coffeecontainer">
          <a
            href="https://www.buymeacoffee.com/adotterer"
            target="_blank"
            rel="noreferrer"
          >
            <img id="coffee" src={coffeeImg} alt="buymeacoffee" />
          </a>
        </span>
      </Container>
    </div>
  );
}
