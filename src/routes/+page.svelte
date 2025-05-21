<script>
    import Header from "../components/Header.svelte";
    import Section22FullWidthPortfolio from "../components/Section22FullWidthPortfolio.svelte";
  import Section4RowDescription from "../components/Section4RowDescription.svelte";
  import SectionCallToAction from "../components/SectionCallToAction.svelte";
    import SectionFullWidthPortfolio from "../components/SectionFullWidthPortfolio.svelte";

    </script>

    <Header />
    <SectionFullWidthPortfolio id="work"
    project="block bash"
    link="media/bb.jpg"
    href="/blockbash"
    />
    <Section22FullWidthPortfolio 
    project="Avro Gaming"
    link="media/avrogaming_intro.mp4"
    href="/avrogaming"

    project2="High Voltage"
    link2="media/highvoltage_intro.mp4"
    href2="/highvoltage"
    />

    <SectionFullWidthPortfolio 
    project="Academy Of Football"
    link="img/AOF_Thumb.jpg"
    href="/AOF" 
/>
    
    <Section4RowDescription id="about"
    heading1= "Company"
    symbol1= "-"
    content1= "Looking for work"

    heading2= "Name"
    symbol2= "-"
    content2= "Olivier Marcotte"


    heading3= "Skills"
    symbol3= "-"
    listStyle="default"
    content3={[
    
  {
    title: "IT Support & Administration",
    items: [
      "User support & troubleshooting",
      "Windows workstation deployment",
      "Network diagnostics (VPN, DNS)",
      "Active Directory & Microsoft 365",
      "Incident documentation & follow-up"
    ]
  },
  {
    title: "Multimedia Development",
    items: [
      "Graphic Design (Figma, Photoshop, Illustrator)📷",
      "Motion Design (After effects, UE5, 3DS Max, Blender)🦅", 
      "Video Editing (Davinci, Premiere)🎞️",
      "Gaming (Unreal Engine)🎮",
      
    ]
  },
  {
    title: "Web",
    items: [
      "Website Building (Wordpress, Svelte, VSC)🪐",
      "HTML/CSS Basics💻"
    ]
  }
]}


    heading4= "About me"
    symbol4= "-"
    content4= "
    Professional
    Self-Learning
    Team player 
    Funny &#128514;
    "
    />

    <SectionCallToAction 
    id="contact"
    heading="Seeking IT or Multimedia Expertise?"
    buttontext="Get In Touch!"
    url="https://www.linkedin.com/in/oliviermarcotte/"
    icon="fa fa-linkedin"
    url2="https://www.linkedin.com/in/oliviermarcotte/"
    icon2="fa fa-vimeo"
     />
   




    