<script>
    import Header from "../components/Header.svelte";
    import Section22FullWidthPortfolio from "../components/Section22FullWidthPortfolio.svelte";
  import Section4RowDescription from "../components/Section4RowDescription.svelte";
  import SectionCallToAction from "../components/SectionCallToAction.svelte";
    import SectionFullWidthPortfolio from "../components/SectionFullWidthPortfolio.svelte";

    </script>

    <Header />
    <SectionFullWidthPortfolio project="block bash"
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
    project="Kinova"
    link="media/NewPrzingAd.mp4"
    href="" 
/>
    
    <Section4RowDescription 
    heading1= "Company"
    symbol1= "-"
    content1= "Looking for work"
    heading2= "Name"
    symbol2= "-"
    content2= "Olivier Marcotte"
    heading3= "Skills"
    symbol3= "-"
    content3= "IT Technician
    Motion Design
    VFX - CGI
    Animation
    Website"
    heading4= "Connect"
    symbol4= "-"
    content4= "Linkedin
    Email"
    />

    <SectionCallToAction 
    heading="Seeking IT and Multimedia Expertise?"
    buttontext="Get In Touch!"
    url="https://www.linkedin.com/in/oliviermarcotte/"
    icon="fa fa-linkedin"
    url2="https://www.linkedin.com/in/oliviermarcotte/"
    icon2="fa fa-vimeo"
     />
   




    