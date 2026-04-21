import { ContactForm } from "@/components/ContactForm";
import { LandingInteractivity } from "@/components/LandingInteractivity";

export default function Home() {
  return (
    <>
      <LandingInteractivity />
      <nav className="gnav">
        <div>
          <svg
            data-name="Layer 1"
            id="Layer_1"
            viewBox="0 0 1047.76 160.69"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>
                {`
      .cls-1 {
        fill: #f5f4f3;
      }
    `}
              </style>
            </defs>
            <path
              className="cls-1"
              d="M136.07,83.16c-13.24,19.29-26.39,38.64-39.63,57.94L34.2,50.06v110.61H0V.08h79.27c18.93,27.69,37.87,55.39,56.8,83.08Z"
            />
            <path
              className="cls-1"
              d="M300.53.08v160.59h-68.11l.22-102.6c-23.4,34.2-46.79,68.4-70.19,102.6h-39.79C159.28,107.13,195.91,53.6,232.53.06c22.67,0,45.33.01,68,.02Z"
            />
            <path
              className="cls-1"
              d="M503.35,0h-121.5c-35.55,0-63.7,25.73-63.7,56.52v48.29c0,30.8,28.92,55.86,64.47,55.86h121.5c35.55,0,64.47-25.06,64.47-55.86v-48.29c0-30.79-29.69-56.52-65.24-56.52ZM500.48,116.91c0,7.72-7.86,14.57-17.52,14h-79.17c-9.66.56-17.52-6.28-17.52-14V43.35c0-7.72,7.86-13.53,17.52-13.53h79.17c9.66,0,17.52,5.81,17.52,13.53v73.56Z"
            />
            <g>
              <path
                className="cls-1"
                d="M736.73,141.2c-4.44,6.49-8.89,12.98-13.33,19.47h-52.62C634.18,107.15,597.57,53.64,560.96.12v-.04h79.26c32.17,47.04,64.35,94.08,96.52,141.12Z"
              />
              <path
                className="cls-1"
                d="M833.21.08c-25.56,37.38-51.13,74.77-76.69,112.15-6.62-9.69-13.25-19.39-19.87-29.08,18.95-27.69,37.89-55.38,56.84-83.07h39.73Z"
              />
            </g>
            <polygon
              className="cls-1"
              points="1047.76 130.94 1047.76 160.69 850.4 160.69 850.4 160.64 850.97 160.64 850.97 .08 1047.72 .08 1047.72 29.83 919.09 29.83 919.09 65.51 1047.72 65.51 1047.72 95.26 919.09 95.26 919.09 130.94 1047.76 130.94"
            />
          </svg>
        </div>
        <ul>
          <li>
            <a href="#s-hero">მთავარი</a>
          </li>
          <li>
            <a href="#s-features">პროექტი</a>
          </li>
          <li>
            <a href="#s-gallery">გალერეა</a>
          </li>
          <li>
            <a href="#s-plans">გეგმარება</a>
          </li>
          <li>
            <a href="#s-location">ლოკაცია</a>
          </li>
          <li>
            <a href="#s-contact">კონტაქტი</a>
          </li>
        </ul>
        <div className="hamburger" id="hamburger">
          <span />
          <span />
          <span />
        </div>
      </nav>
      <section id="s-hero">
        <div className="h-bg" />
        <div className="h-ov" />
        <div className="h-ey">
          <div className="h-ey-text">
            MOVE DEVELOPMENT{" "}
            <span style={{ color: "rgba(245,244,243,0.75)" }}>წარმოგიდგენთ</span>
          </div>
          <div className="h-ey-line" />
        </div>
        <h1 className="h-title">Piazza Residence</h1>
        <p className="h-sub">
          პრემიუმ საცხოვრებელი კომპლექსი ბათუმის ისტორიულ ცენტრში
        </p>
        <div className="h-btns">
          <button type="button" className="btn btn-p">
            მეტის გაგება
          </button>
          <button type="button" className="btn btn-o">
            დაგვიკავშირდით
          </button>
        </div>
      </section>
      <section id="s-features">
        <div className="f-left">
          <div className="f-top">
            <div className="ey">
              <span>პროექტის შესახებ</span>
            </div>
            <h2 className="s-h2">
              ძირითადი
              <br />
              მახასიათებლები
            </h2>
          </div>
          <div className="f-mid">
            <p className="f-desc">
              PIAZZA Residence — პრემიუმ კლასის საცხოვრებელი კომპლექსი, რომელიც
              აერთიანებს თანამედროვე არქიტექტურას და 119 წლის კულტურული
              მემკვიდრეობის შენობას ბათუმის ისტორიულ ცენტრში.
            </p>
          </div>
          <div className="f-bot">
            <div className="stats">
              <div className="stat">
                <div className="st-num">25</div>
                <div className="st-lbl">სართული</div>
                <div className="st-dsc">ბათუმის ისტორიულ ცენტრში</div>
              </div>
              <div className="stat">
                <div className="st-num">375</div>
                <div className="st-lbl">აპარტამენტი</div>
                <div className="st-dsc">სტუდიოდან 3-ოთახიანამდე</div>
              </div>
              <div className="stat">
                <div className="st-num">75M</div>
                <div className="st-lbl">მილიონი დოლარი</div>
                <div className="st-dsc">საერთაშორისო სტანდარტის</div>
              </div>
            </div>
          </div>
          <div className="tgl">
            <span>არქიტექტურა, რომელიც რჩება</span>
          </div>
        </div>
        <div className="f-right">
          <img alt="Piazza Residence" src="/assets/images/hero-main.jpg" />
          <div className="f-ov" />
          <div className="f-lbl">
            <div className="f-lbl-p">
              Piazza
              <br />
              Residence
            </div>
            <div className="f-lbl-l">
              Batumi
              <br />
              Georgia
            </div>
          </div>
        </div>
      </section>
      <div className="s-div">
        <div className="s-div-line" />
        <div className="s-div-txt">
          MOVE Development · Piazza Residence · ბათუმი, 2028
        </div>
        <div className="s-div-line" />
      </div>
      <section id="s-project">
        <div className="p-left">
          <div className="p-ey">
            <span>MOVE Development · Piazza Residence</span>
          </div>
          <h2 className="s-h2">
            პროექტის
            <br />
            შესახებ
          </h2>
          <p className="p-sub">არქიტექტურა, კომფორტი და ისტორია ერთ სივრცეში</p>
          <div className="p-list">
            <div className="p-item">
              <span className="p-num">01</span>
              <span className="p-txt">
                119 წლის კულტურული ძეგლი — რესტავრირებული და ინტეგრირებული
              </span>
            </div>
            <div className="p-item">
              <span className="p-num">02</span>
              <span className="p-txt">კერძო პიაცა ვენეციური შადრევნებით</span>
            </div>
            <div className="p-item">
              <span className="p-num">03</span>
              <span className="p-txt">13–მეტრიანი კოლონადები, ბუნებრივი ქვის ფასადი</span>
            </div>
            <div className="p-item">
              <span className="p-num">04</span>
              <span className="p-txt">
                მაღალჭერიანი, ნათელი, ფუნქციურად განლაგებული ინტერიერი
              </span>
            </div>
            <div className="p-item">
              <span className="p-num">05</span>
              <span className="p-txt">
                ზღვის, მთის და ქალაქის ხედები — ყველა აპარტამენტს აქვს აივანი
              </span>
            </div>
            <div className="p-item">
              <span className="p-num">06</span>
              <span className="p-txt">
                კონსიერჟ–სერვისი, 24/7 დაცვა და ვიდეომონიტორინგი
              </span>
            </div>
            <div className="p-item">
              <span className="p-num">07</span>
              <span className="p-txt">ქონების მართვა და გაქირავების სერვისი</span>
            </div>
            <div className="p-item">
              <span className="p-num">08</span>
              <span className="p-txt">TBC Bank–ის სრული დაფინანსება</span>
            </div>
          </div>
        </div>
        <div className="p-right">
          <img
            alt="Piazza Residence Courtyard"
            src="/assets/images/progress-courtyard.jpg"
          />
          <div className="p-ov" />
        </div>
      </section>
      <section id="s-gallery">
        <div className="g-hdr">
          <div>
            <div className="g-ey">
              <span>Piazza Residence · ბათუმი</span>
            </div>
            <h2 className="g-h2">გალერეა</h2>
          </div>
          <div className="g-cnt">04 სურათი</div>
        </div>
        <div className="g-grid">
          <div className="g-img g-img-1">
            <img alt="სრული ხედი · დღე" src="/assets/images/gallery-01-day.jpg" />
            <div className="g-img-ov" />
            <div className="g-img-lbl">
              <div className="g-lbl-txt">ქალაქის სრული ხედი</div>
              <div className="g-lbl-num">01</div>
            </div>
          </div>
          <div className="g-img g-img-2">
            <img
              alt="სრული ხედი · ღამე"
              src="/assets/images/gallery-02-night.jpg"
            />
            <div className="g-img-ov" />
            <div className="g-img-lbl">
              <div className="g-lbl-txt">სრული ხედი · ღამე</div>
              <div className="g-lbl-num">02</div>
            </div>
          </div>
          <div className="g-img g-img-3">
            <img alt="კერძო პიაცა" src="/assets/images/gallery-03-piazza.jpg" />
            <div className="g-img-ov" />
            <div className="g-img-lbl">
              <div className="g-lbl-txt">კერძო პიაცა</div>
              <div className="g-lbl-num">03</div>
            </div>
          </div>
          <div className="g-img g-img-4">
            <img
              alt="ფასადი · ღამე"
              src="/assets/images/gallery-04-facade-night.jpg"
            />
            <div className="g-img-ov" />
            <div className="g-img-lbl">
              <div className="g-lbl-txt">ფასადი · ღამე</div>
              <div className="g-lbl-num">04</div>
            </div>
          </div>
        </div>
        <div className="g-bot">
          <div className="g-tgl">
            <span>არქიტექტურა, რომელიც რჩება</span>
          </div>
          <div className="g-loc">Batumi · Georgia · 2028</div>
        </div>
      </section>
      <section id="s-plans">
        <div className="pl-hdr">
          <div>
            <div className="pl-ey">
              <span>Piazza Residence · ბათუმი</span>
            </div>
            <h2 className="pl-h2">გეგმარება</h2>
          </div>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(15,19,34,0.52)",
              letterSpacing: "0.04em",
              paddingBottom: "4px",
            }}
          >
            შეარჩიეთ თქვენი სივრცე
          </p>
        </div>
        <div className="pl-tabs">
          <div className="pl-tab" data-plan="studio">
            სტუდიო
          </div>
          <div className="pl-tab" data-plan="one">
            ერთსაძინებლიანი
          </div>
          <div className="pl-tab" data-plan="two">
            ორსაძინებლიანი
          </div>
          <div className="pl-tab active" data-plan="three">
            სამსაძინებლიანი
          </div>
        </div>
        <div className="pl-main">
          <div className="pl-table">
            <div className="pl-strip">
              <div className="pl-si">
                <div className="pl-si-lbl">ტიპი</div>
                <div className="pl-si-val" id="pl-type">
                  სამსაძინებლიანი
                </div>
              </div>
              <div className="pl-si">
                <div className="pl-si-lbl">ფართი</div>
                <div className="pl-si-val" id="pl-area">
                  134.0 – 143.3 მ²
                </div>
              </div>
              <div className="pl-si">
                <div className="pl-si-lbl">ფასი</div>
                <div className="pl-si-val" id="pl-price">
                  $365,415-დან
                </div>
              </div>
            </div>
            <div className="pl-legend">
              <div className="pl-legend-item">
                <svg className="pl-legend-dot" viewBox="0 0 10 10">
                  <rect
                    fill="#4a9eff"
                    fillOpacity="0.7"
                    height="10"
                    rx="1"
                    width="10"
                  />
                </svg>
                სტუდიო
              </div>
              <div className="pl-legend-item">
                <svg className="pl-legend-dot" viewBox="0 0 10 10">
                  <rect
                    fill="#34d399"
                    fillOpacity="0.7"
                    height="10"
                    rx="1"
                    width="10"
                  />
                </svg>
                1 საძინებელი
              </div>
              <div className="pl-legend-item">
                <svg className="pl-legend-dot" viewBox="0 0 10 10">
                  <rect
                    fill="#a78bfa"
                    fillOpacity="0.7"
                    height="10"
                    rx="1"
                    width="10"
                  />
                </svg>
                2 საძინებელი
              </div>
              <div className="pl-legend-item">
                <svg className="pl-legend-dot" viewBox="0 0 10 10">
                  <rect
                    fill="#fb923c"
                    fillOpacity="0.7"
                    height="10"
                    rx="1"
                    width="10"
                  />
                </svg>
                3 საძინებელი
              </div>
            </div>
            <div className="pl-tw">
              <div className="pl-th">
                <div className="pl-thc">ტიპი</div>
                <div className="pl-thc">ფართი</div>
                <div className="pl-thc">ფასი</div>
              </div>
              <div className="pl-row" data-plan="studio">
                <div className="pl-td n">სტუდიო</div>
                <div className="pl-td">35.7 – 49.7 მ²</div>
                <div className="pl-td n">$100,435-დან</div>
              </div>
              <div className="pl-row" data-plan="one">
                <div className="pl-td n">ერთსაძინებლიანი</div>
                <div className="pl-td">47.5 – 59.5 მ²</div>
                <div className="pl-td n">$142,080-დან</div>
              </div>
              <div className="pl-row" data-plan="two">
                <div className="pl-td n">ორსაძინებლიანი</div>
                <div className="pl-td">60.2 – 118.7 მ²</div>
                <div className="pl-td n">$166,260-დან</div>
              </div>
              <div className="pl-row active" data-plan="three">
                <div className="pl-td n">სამსაძინებლიანი</div>
                <div className="pl-td">134.0 – 143.3 მ²</div>
                <div className="pl-td n">$365,415-დან</div>
              </div>
            </div>
          </div>
          <div className="pl-img-col show-three" id="pl-img-col">
            <div
              className="pl-img-wrap"
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <img
                alt="სართულის გეგმარება"
                className="pl-floorplan-img"
                id="pl-plan-img"
                src="/assets/images/floorplan.png"
              />
              <svg
                className="pl-svg-ov"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                }}
                viewBox="0 0 2000 1584"
              >
                <g className="apt-hl" id="hl-studio" style={{ display: "none" }}>
                  <rect
                    fill="rgba(59,130,246,0.34)"
                    height="302"
                    stroke="rgba(59,130,246,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="132"
                    x="414"
                    y="602"
                  />
                  <rect
                    fill="rgba(59,130,246,0.34)"
                    height="302"
                    stroke="rgba(59,130,246,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="136"
                    x="548"
                    y="602"
                  />
                  <rect
                    fill="rgba(59,130,246,0.34)"
                    height="302"
                    stroke="rgba(59,130,246,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="142"
                    x="686"
                    y="602"
                  />
                  <rect
                    fill="rgba(59,130,246,0.34)"
                    height="316"
                    stroke="rgba(59,130,246,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="148"
                    x="1110"
                    y="256"
                  />
                  <rect
                    fill="rgba(59,130,246,0.34)"
                    height="326"
                    stroke="rgba(59,130,246,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="138"
                    x="1454"
                    y="264"
                  />
                  <rect
                    fill="rgba(59,130,246,0.34)"
                    height="128"
                    stroke="rgba(59,130,246,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="222"
                    x="1186"
                    y="862"
                  />
                </g>
                <g className="apt-hl" id="hl-one" style={{ display: "none" }}>
                  <polygon
                    fill="rgba(34,197,94,0.30)"
                    points="130,824 210,824 210,904 298,904 298,1062 130,1062"
                    stroke="rgba(34,197,94,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                  />
                  <rect
                    fill="rgba(34,197,94,0.30)"
                    height="334"
                    stroke="rgba(34,197,94,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="180"
                    x="1272"
                    y="254"
                  />
                  <rect
                    fill="rgba(34,197,94,0.30)"
                    height="296"
                    stroke="rgba(34,197,94,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="228"
                    x="1374"
                    y="642"
                  />
                  <rect
                    fill="rgba(34,197,94,0.30)"
                    height="298"
                    stroke="rgba(34,197,94,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="198"
                    x="922"
                    y="962"
                  />
                </g>
                <g className="apt-hl" id="hl-two" style={{ display: "none" }}>
                  <rect
                    fill="rgba(167,139,250,0.28)"
                    height="212"
                    stroke="rgba(167,139,250,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="217"
                    x="118"
                    y="1038"
                  />
                  <rect
                    fill="rgba(167,139,250,0.28)"
                    height="288"
                    stroke="rgba(167,139,250,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="268"
                    x="422"
                    y="962"
                  />
                  <rect
                    fill="rgba(167,139,250,0.28)"
                    height="384"
                    stroke="rgba(167,139,250,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="306"
                    x="1594"
                    y="202"
                  />
                  <rect
                    fill="rgba(167,139,250,0.28)"
                    height="346"
                    stroke="rgba(167,139,250,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="292"
                    x="1604"
                    y="586"
                  />
                  <rect
                    fill="rgba(167,139,250,0.28)"
                    height="260"
                    stroke="rgba(167,139,250,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="304"
                    x="1110"
                    y="1000"
                  />
                </g>
                <g className="apt-hl" id="hl-three" style={{ display: "none" }}>
                  <polygon
                    fill="rgba(249,115,22,0.28)"
                    points="808,258 1118,258 1118,530 1140,530 1140,650 808,650"
                    stroke="rgba(249,115,22,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                  />
                </g>
              </svg>
              <div className="pl-badge">
                <div className="pl-badge-dot" />
                <div className="pl-badge-txt" id="plan-badge-text">
                  სრული სართულის გეგმარება
                </div>
              </div>
              <div
                className="pl-legend"
                id="pl-legend"
                style={{
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  background: "rgba(15, 19, 34, 0.82)",
                  padding: "8px 12px",
                  display: "block",
                }}
              >
                <div
                  id="pl-legend-txt"
                  style={{
                    fontFamily: "BPG,sans-serif",
                    fontSize: "8px",
                    letterSpacing: "0.14em",
                    color: "rgba(245,244,243,0.9)",
                    textTransform: "uppercase",
                  }}
                >
                  სტუდიო
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-tgl">
          <span>არქიტექტურა, რომელიც რჩება</span>
        </div>
      </section>
      <section id="s-location">
        <div className="lo-hdr">
          <div>
            <div className="lo-ey">
              <span>Piazza Residence · ბათუმი</span>
            </div>
            <h2 className="lo-h2">ლოკაცია</h2>
          </div>
          <p className="lo-desc">
            ბათუმის ისტორიულ ცენტრში —
            <br />
            სადაც ყველაფერი ხელმისაწვდომია
          </p>
        </div>
        <div className="lo-map">
          <iframe
            allowFullScreen
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.openstreetmap.org/export/embed.html?bbox=41.6285%2C41.6370%2C41.6415%2C41.6465&amp;layer=mapnik&amp;marker=41.64005%2C41.63485"
            style={{
              border: 0,
              display: "block",
              background: "#dfe6ec",
            }}
            title="Piazza Residence location map"
            width="100%"
          />
          <a
            href="https://www.google.com/maps/search/?api=1&amp;query=41.64005,41.63485"
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
              background: "rgba(15,19,34,0.85)",
              color: "rgba(245,244,243,0.85)",
              fontFamily: "BPG,sans-serif",
              fontSize: "8px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "7px 12px",
              display: "block",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            რუკის გახსნა ↗
          </a>
          <div className="lo-map-badge">
            <div className="lo-map-dot" />
            <div className="lo-map-txt">
              Piazza Residence · ვახტანგ გორგასლის 59
            </div>
          </div>
        </div>
        <div className="lo-stats">
          <div className="lo-stat">
            <div className="lo-st-lbl">ზღვამდე</div>
            <div className="lo-st-val">300მ</div>
            <div className="lo-st-dsc">ფეხით 4 წუთი</div>
          </div>
          <div className="lo-stat">
            <div className="lo-st-lbl">ბულვარამდე</div>
            <div className="lo-st-val">5 წთ</div>
            <div className="lo-st-dsc">ფეხით</div>
          </div>
          <div className="lo-stat">
            <div className="lo-st-lbl">აეროპორტამდე</div>
            <div className="lo-st-val">15 წთ</div>
            <div className="lo-st-dsc">მანქანით</div>
          </div>
          <div className="lo-stat">
            <div className="lo-st-lbl">ისტორიული ცენტრი</div>
            <div className="lo-st-val">0 კმ</div>
            <div className="lo-st-dsc">ცენტრში, პირდაპირ</div>
          </div>
        </div>
        <div className="lo-bot">
          <div className="lo-addr">
            <div className="lo-addr-lbl">მისამართი</div>
            <div className="lo-addr-txt">
              ვახტანგ გორგასლის ქ. 59
              <br />
              ბათუმი, საქართველო
            </div>
          </div>
          <div className="lo-tgl">
            <span>არქიტექტურა, რომელიც რჩება</span>
          </div>
        </div>
      </section>
      <section id="s-contact">
        <div className="pr-section">
          <div className="pr-hdr">
            <div className="pr-ey">
              <span>Piazza Residence · მშენებლობის სტატუსი</span>
            </div>
            <h2 className="pr-h2">პროგრესი &amp; განახლებები</h2>
            <p className="pr-sub">მშენებლობის მიმდინარე სტატუსი</p>
          </div>
          <div className="timeline">
            <div className="tl-line" />
            <div className="tl-prog" />
            <div className="tl-step">
              <div className="tl-dot active" />
              <div className="tl-lbl">ფუნდამენტი</div>
              <div className="tl-yr">2025</div>
            </div>
            <div className="tl-step">
              <div className="tl-dot" />
              <div className="tl-lbl">მშენებლობა</div>
              <div className="tl-yr">2026</div>
            </div>
            <div className="tl-step">
              <div className="tl-dot" />
              <div className="tl-lbl">ფასადი</div>
              <div className="tl-yr">2027</div>
            </div>
            <div className="tl-step">
              <div className="tl-dot" />
              <div className="tl-lbl">ჩაბარება</div>
              <div className="tl-yr">2028</div>
            </div>
          </div>
        </div>
        <div className="fc-section">
          <div className="faq-col">
            <div className="faq-ey">
              <span>FAQ</span>
            </div>
            <h2 className="faq-h2">
              ხშირად დასმული
              <br />
              კითხვები
            </h2>
            <p className="faq-sub">გაქვთ კითხვა? პასუხები ქვემოთ.</p>
            <div className="faq-list">
              <div className="faq-item">
                <div className="faq-q">
                  <span className="faq-q-txt">როდის ჩაბარდება კომპლექსი?</span>
                  <div className="faq-icon">+</div>
                </div>
                <div className="faq-a">
                  <div className="faq-a-in">
                    Piazza Residence-ის მშენებლობა დასრულდება 2028 წლის ბოლოს.
                    ამჟამად მიმდინარეობს ფუნდამენტის სამუშაოები.
                  </div>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-q">
                  <span className="faq-q-txt">რა ტიპის ბინებია ხელმისაწვდომი?</span>
                  <div className="faq-icon">+</div>
                </div>
                <div className="faq-a">
                  <div className="faq-a-in">
                    კომპლექსი გთავაზობთ სტუდიოდან 3-ოთახიან აპარტამენტებამდე. სულ
                    375 აპარტამენტი 25 სართულზე.
                  </div>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-q">
                  <span className="faq-q-txt">რა არის გადახდის პირობები?</span>
                  <div className="faq-icon">+</div>
                </div>
                <div className="faq-a">
                  <div className="faq-a-in">
                    Piazza Residence გთავაზობთ მოქნილ გადახდის პირობებს.
                    დეტალური ინფორმაციისთვის დაგვიკავშირდით.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="con-col">
            <ContactForm />
          </div>
        </div>
      </section>
      <footer className="footer">
        <div>
          <svg
            data-name="Layer 1"
            id="Layer_1_2"
            viewBox="0 0 1047.76 160.69"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>
                {`
      .cls-1 {
        fill: #f5f4f3;
      }
    `}
              </style>
            </defs>
            <path
              className="cls-1"
              d="M136.07,83.16c-13.24,19.29-26.39,38.64-39.63,57.94L34.2,50.06v110.61H0V.08h79.27c18.93,27.69,37.87,55.39,56.8,83.08Z"
            />
            <path
              className="cls-1"
              d="M300.53.08v160.59h-68.11l.22-102.6c-23.4,34.2-46.79,68.4-70.19,102.6h-39.79C159.28,107.13,195.91,53.6,232.53.06c22.67,0,45.33.01,68,.02Z"
            />
            <path
              className="cls-1"
              d="M503.35,0h-121.5c-35.55,0-63.7,25.73-63.7,56.52v48.29c0,30.8,28.92,55.86,64.47,55.86h121.5c35.55,0,64.47-25.06,64.47-55.86v-48.29c0-30.79-29.69-56.52-65.24-56.52ZM500.48,116.91c0,7.72-7.86,14.57-17.52,14h-79.17c-9.66.56-17.52-6.28-17.52-14V43.35c0-7.72,7.86-13.53,17.52-13.53h79.17c9.66,0,17.52,5.81,17.52,13.53v73.56Z"
            />
            <g>
              <path
                className="cls-1"
                d="M736.73,141.2c-4.44,6.49-8.89,12.98-13.33,19.47h-52.62C634.18,107.15,597.57,53.64,560.96.12v-.04h79.26c32.17,47.04,64.35,94.08,96.52,141.12Z"
              />
              <path
                className="cls-1"
                d="M833.21.08c-25.56,37.38-51.13,74.77-76.69,112.15-6.62-9.69-13.25-19.39-19.87-29.08,18.95-27.69,37.89-55.38,56.84-83.07h39.73Z"
              />
            </g>
            <polygon
              className="cls-1"
              points="1047.76 130.94 1047.76 160.69 850.4 160.69 850.4 160.64 850.97 160.64 850.97 .08 1047.72 .08 1047.72 29.83 919.09 29.83 919.09 65.51 1047.72 65.51 1047.72 95.26 919.09 95.26 919.09 130.94 1047.76 130.94"
            />
          </svg>
        </div>
        <div className="footer-copy">© 2026 MOVE Development. ყველა უფლება დაცულია.</div>
        <div className="footer-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}
