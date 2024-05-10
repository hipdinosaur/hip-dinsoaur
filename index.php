<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Nathan Lindahl Design</title>
  <?php include 'components/includes.php'; ?>
</head>
<body>
  <div id="photos">
    <img alt="" class="pop profile" src="/images/profile1.jpg">
    <img alt="" class="pop profile" src="/images/profile2.jpg">
    <img alt="" class="pop design" src="/images/design.jpg">
    <img alt="" class="pop design" src="/images/design2.gif">
    <img alt="" class="pop design" src="/images/design3.png">
    <img alt="" class="pop design" src="/images/design4.png">
    <img alt="" class="pop pnw" src="/images/pnw1.jpg">
    <img alt="" class="pop pnw" src="/images/pnw2.jpg">
    <img alt="" class="pop pnw" src="/images/pnw3.jpg">
    <img alt="" class="pop pnw" src="/images/pnw4.jpg">
    <img alt="" class="pop pnw" src="/images/pnw5.jpg">
    <img alt="" class="pop pnw" src="/images/pnw6.jpg">
  </div>
  <?php include 'components/navigation.php'; ?>
  <div class="hero full-width">
    <h1>Hey! <span class="photo profile">I’m Nathan</span>, a visual <span class="photo design">designer</span> living in the great <span class="photo pnw">PNW</span>.</h1>
  </div>

  <section id="work" class="full-width">
    <div class="rule">
      <h2 class="eyebrow">Work</h2>
    </div>
    <div class="row">
      <div class="item-full">
        <a class="work" href="/case-studies/nextiva.php">
          <div class="preview">
            <img alt="Collage of Nextiva branding and illustration" src="/images/nextiva-preview.jpg" srcset="/images/nextiva-preview.jpg 1x, /images/nextiva-preview@2x.jpg 2x">
          </div>
          <h3>Nextiva</h3>
          <div class="preview-meta">
            <p>Web, Design System, Branding</p>
            <p class="meta-type">In-house</p>
          </div>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="item-large">
        <a class="work" href="/case-studies/pwf.php">
          <div class="preview">
            <img alt="Public Welfare Foundation logo" src="/images/public-welfare-foundation-preview.png" srcset="/images/public-welfare-foundation-preview.png 1x, /images/public-welfare-foundation-preview@2x.png 2x">
          </div>
          <h3>Public Welfare Foundation</h3>
          <div class="preview-meta">
            <p>Branding, Web</p>
            <p class="meta-type">Social Driver</p>
          </div>
        </a>
      </div>
      <div class="item-small">
        <a class="work" href="/case-studies/artsy.php">
          <div class="preview">
            <picture>
              <source srcset="/images/artsy.png 1x, /images/artsy@2x.png 2x," media="(min-width:770px)">
              <source srcset="/images/artsy-mobile@2x.png" media="(max-width:769px)">
              <img src="/images/artsy.png"  alt="Artsy logo on inked canvas.">
            </picture>
          </div>
          <h3>Artsy: Gallery Partnerships</h3>
          <div class="preview-meta">
            <p>Web</p>
            <p class="meta-type">Social Driver</p>
          </div>
        </a>
      </div>
    </div>
    <div class="row full">
      <div class="item-small">
        <a class="work" href="/case-studies/city-parks.php">
          <div class="preview">
            <picture>
              <source srcset="/images/cityparks-preview.png 1x, /images/cityparks-preview@2x.png 2x" media="(min-width:770px)">
              <source srcset="/images/cityparks-preview-mobile@2x.png" media="(max-width:769px)">
              <img src="/images/cityparks-preview.png"  alt="City Parks Alliance logo overlaid on aerial photo of a park.">
            </picture>
          </div>
          <h3>City Parks Alliance</h3>
          <div class="preview-meta">
            <p>Web</p>
            <p class="meta-type">Social Driver</p>
          </div>
        </a>
      </div>
      <div class="item-large">
        <a class="work" href="/case-studies/portside.php">
          <div class="preview">
          <img src="/images/portside-preview.png" srcset="/images/portside-preview.png 1x, /images/portside-preview@2x.png 2x" alt="Portside Productions logo">
          </div>
          <h3>Portside Productions</h3>
          <div class="preview-meta">
            <p>Branding, Web</p>
            <p class="meta-type">Freelance</p>
          </div>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="item-large">
        <a class="work" href="/case-studies/childcare.php">
          <div class="preview">
            <img src="/images/childcareworldwide-preview.jpg"  srcset="/images/childcareworldwide-preview.jpg 1x, /images/childcareworldwide-preview@2x.jpg 2x" alt="A family in Africa.">
          </div>
          <h3>Childcare Worldwide</h3>
          <div class="preview-meta">
            <p>Print, Web, Campaigns, Social</p>
            <p class="meta-type">In-house</p>
          </div>
        </a>
      </div>
      <div class="item-small">
        <a class="work" href="/case-studies/personal.php">
          <div class="preview">
            <img src="/images/personal-preview.png" srcset="/images/personal-preview.png 1x, /images/personal-preview@2x.png 2x" alt="Illustrated minimalistic sunset">
          </div>
          <h3>Personal</h3>
          <p>¯\_(ツ)_/¯</p>
        </a>
      </div>

    </div>

  </section>
  <?php include 'components/contact.php' ?>
  <?php include 'components/footer.php' ?>
</body>
</html>
