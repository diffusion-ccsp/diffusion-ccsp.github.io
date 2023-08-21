<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="description"
        content="Compositional Diffusion-Based Continuous Constraint Solvers">
  <meta name="keywords" content="Diffusion models, Constriant satisfaction problems, Robot packing">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Diffusion-CCSP</title>

  <link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro"
        rel="stylesheet">

  <link rel="stylesheet" href="./static/css/bulma.min.css">
  <link rel="stylesheet" href="./static/css/bulma-carousel.min.css">
  <link rel="stylesheet" href="./static/css/bulma-slider.min.css">
  <link rel="stylesheet" href="./static/css/fontawesome.all.min.css">
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">
  <link rel="stylesheet" href="./static/css/index.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script defer src="./static/js/fontawesome.all.min.js"></script>
  <script src="./static/js/bulma-carousel.min.js"></script>
  <script src="./static/js/bulma-slider.min.js"></script>
  <script src="./static/js/index.js"></script>
</head>
<body onload=""> <!--updateResultVideo();-->

<section class="hero" style="background-color: #ffffff; z-index:-10">
  <div class="hero-body">
    <div class="container is-max-desktop">
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <h1 class="title is-1 publication-title">Compositional Diffusion-Based <br>Continuous Constraint Solvers</h1>
          <!-- <h3 class="title is-4 conference-authors"><a target="_blank" href="https://roboticsconference.org/">RSS 2023</a></h3> -->
          <div class="is-size-5 publication-authors">
            <span class="author-block">
              <a target="_blank" href="https://zt-yang.com/">Zhutian Yang</a><sup>1</sup>,</span>
            <span class="author-block">
              <a target="_blank" href="http://web.mit.edu/caelan/www/">Jiayuan Mao</a><sup>1</sup>,</span>
            <span class="author-block">
              <a target="_blank" href="http://web.mit.edu/caelan/www/">Yilun Du</a><sup>1</sup>,</span><br>
            <span class="author-block">
              <a target="_blank" href="http://web.mit.edu/caelan/www/">Jiajun Wu</a><sup>2</sup>,</span>
            <span class="author-block">
              <a target="_blank" href="http://web.mit.edu/caelan/www/">Joshua B. Tenenbaum</a><sup>1</sup>,</span>
            <span class="author-block">
              <a target="_blank" href="http://people.csail.mit.edu/tlp/">Tomás Lozano-Pérez</a><sup>1</sup>,</span>
            <span class="author-block">
              <a target="_blank" href="http://people.csail.mit.edu/lpk/">Leslie Kaelbling</a><sup>1</sup>
            </span>
          </div>

          <div class="is-size-5 publication-authors">
            <span class="author-block"><sup>1</sup>MIT,</span>
            <span class="author-block"><sup>2</sup>Stanford</span>
          </div>

          <div class="column has-text-centered">
            <div class="publication-links">
              <!-- PDF Link. -->
              <span class="link-block">
                <a target="_blank" href="paper/diffusion_ccsp_corl2023.pdf"
                   class="external-link button is-normal is-rounded is-dark">
                   <!-- "https://arxiv.org/abs/2211.01576" -->
                  <span class="icon">
                      <i class="fas fa-file-pdf"></i>
                  </span>
                  <span>Paper</span>
                </a>
              </span>

            <!-- Video Link. -->
            <!-- <span class="link-block">
              <a target="_blank" href="https://www.youtube.com/watch?v=kDliSCMW2XY"
                 class="external-link button is-normal is-rounded is-dark">
                <span class="icon">
                    <i class="fab fa-youtube"></i>
                </span>
                <span>Video</span>
              </a>
            </span> -->

            <!-- Code Link. https://github.com/Learning-and-Intelligent-Systems/kitchen-worlds -->
            <span class="link-block">
              <a target="_blank" href=""
                 class="external-link button is-normal is-rounded is-dark">
                <span class="icon">
                    <i class="fab fa-github"></i>
                </span>
                <span>Code (Coming Soon)</span>
                </a>
            </span>

            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</section>

<!-- <section class="hero teaser">
  <div class="container is-fullhd" style="margin-bottom: -300px; z-index:-200">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered  is-centered">
          <video id="teaser" autoplay muted loop height="300px">
            <source src="media/kitchens.mp4"
                    type="video/mp4">
          </video>
          </br>
        </div>
      </div>
    </div>
  </div>
</section> -->

<section class="hero" style="background-color: #ffffff; z-index:-10; margin-top: -3rem">
  <div class="container">
    <div class="hero-body">

      <img src="media/figures/teaser.png" class="full-image" style="width:80%;padding-bottom: 3.5rem"
         alt="Diffusion-CCSP combines diffusion models, representing individual constraints, to generate object placement poses that are reachable and allow collision-free grasps. The choice of an object placement depends on both semantic constraints about object placement and collision avoidance constraints on the object and the robot gripper." />

       <div class="container" style="padding-bottom:2rem">
         <h2 class="subtitle has-text-centered">
         <span class="ddiffusionccsp">Diffusion-CCSP</span> is an approach for learning to solve continuous constraint satisfaction problems in robotic reasoning and planning.</b>
         </h2>
       </div>


      <div id="results-carousel" class="carousel results-carousel">

        <div class="item">
          <video poster="" autoplay muted loop height="100%">
            <source src="media/demo_4_1.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="item">
          <video poster="" autoplay muted loop height="100%">
            <source src="media/demo_5_1.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="item">
          <video poster="" autoplay muted loop height="100%">
            <source src="media/demo_5_1.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="item">
          <video poster="" autoplay muted loop height="100%">
            <source src="media/demo_5_1.mp4"
                    type="video/mp4">
          </video>
        </div>

      </div>

    <div class="container">
      <h2 class="subtitle has-text-centered">
      Above are full motion solutions using the placement poses generated by <span class="ddiffusionccsp">Diffusion-CCSP</span>.</b>
      </h2>
    </div>

    </div>
  </div>
</section>


<section class="hero is-light is-small">
  <div class="hero-body">
    <div class="container">

      <h3 class="title is-3 has-text-centered" style="padding-bottom: 20pt;">Motivations</h3>

      <h2 class="subtitle has-text-centered">
        <b>Continuous Constraint Satisfaction Problems</b> require robot planner to conform to multiple geometric, physical, and qualitative constraints simultaneously.
      </h2>

      <img src="media/figures/constraints.png" class="full-image" style="width:70%;padding-bottom: 2.5rem" alt="" />

      <h2 class="subtitle has-text-centered">
        For example, to place A into the tray in the figure above, we need to generate the grasping pose grasp A, placement pose pose A, and the robot arm trajectory.
      </h2>

      <img src="media/figures/compose.png" class="full-image" style="width:60%;padding-bottom: 0.5rem" alt="" />

      <h2 class="subtitle has-text-centered">
        Our <span class="ddiffusionccsp">Diffusion-CCSP</span> derives global solutions to CCSPs by representing them as factor graphs and combining the energies of diffusion models trained to sample for individual constraint types.
      </h2>

    </div>
  </div>
</section>


<section class="hero is-small">
  <div class="container is-max-widescreen" style="padding: 2rem">

    <div class="rows is-centered ">
      <div class="row is-full-width">
        <h3 class="title is-3 has-text-centered">Abstract</h3>

        <!-- <p class="justify">
            <img src="media/figures/images.jpg" class="interpolation-image" width="480" align="right"
                 style="margin:0% 1% "
                 alt="Image views" />
                 This paper introduces an approach for learning to solve continuous constraint satisfaction problems (CCSP) in robotic reasoning and planning. Previous methods primarily rely on hand-engineering or learning generators for specific constraint types and then rejecting the value assignments when other constraints are violated. By contrast, our model, the compositional diffusion continuous constraint solver (Diffusion-CCSP) derives global solutions to CCSPs by representing them as factor graphs and combining the energies of diffusion models trained to sample for individual constraint types. Diffusion-CCSP exhibits strong generalization to novel combinations of known constraints, and it can be integrated into a task and motion planner to devise long-horizon plans that include actions with both discrete and continuous parameters.
          </p>
        <br><br> -->
        <p class="justify" style="padding-left: 8rem; padding-right: 8rem; padding-bottom: 2rem; ">
          This paper introduces an approach for learning to solve continuous constraint satisfaction problems (CCSP) in robotic reasoning and planning. Previous methods primarily rely on hand-engineering or learning generators for specific constraint types and then rejecting the value assignments when other constraints are violated. By contrast, our model, the compositional diffusion continuous constraint solver (Diffusion-CCSP) derives global solutions to CCSPs by representing them as factor graphs and combining the energies of diffusion models trained to sample for individual constraint types. Diffusion-CCSP exhibits strong generalization to novel combinations of known constraints, and it can be integrated into a task and motion planner to devise long-horizon plans that include actions with both discrete and continuous parameters.
        </p>

        <h3 class="title is-3 has-text-centered" style="padding-bottom: 20pt;">Domains</h3>

        <h3 class="subtitle has-text-centered">
          Example domains that contain geometric, physical, and qualitative constraints:
        </h3>

        <img src="media/figures/domains.png" class="full-image" style="width:80%" alt="" />

        <div style="padding-left: 4rem; ">
          <p>
            <b>Constraints in the above tasks</b>:
            <ul>
              <li>(a) The triangles must not collide with each other and fit in the container.</li>
              <li>(b) The configuration of rectangles must satisfy a given set of qualitative constraints, in total 13 types. For example, <i>left-in(yellow, box)</i> and <i>horizontally-aligned(green, blue)</i>. The figure illustrates a subset of the 45 constraints present in the problem.</li>
              <li>(c) The boxes must fit in between the shelves in a stable configuration. The arrows show the current support relationships.</li>
              <li>(d) The objects must fit inside the container and there exist a packing order such that the gripper won't collide with any object or the container during placing.</li>
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- <section class="hero is-light is-small">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered has-text-centered">
        <div class="column is-two-thirds">
          <h3 class="title is-3 has-text-centered">Video</h3>
          <div class="publication-video">
            <iframe src="https://www.youtube.com/embed/kDliSCMW2XY?rel=0&amp;showinfo=0"
                    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> -->


<section class="hero is-small">
  <div class="hero-body">
    <div class="container">

      <h3 class="title is-3 has-text-centered" style="padding-bottom: 20pt;">Results</h3>

      <h3 class="subtitle has-text-centered">
        Diffusion-CCSP is able to solve unseen problems and even problems with more objects than it is trained with, as shown in the <b>Accumulated number of problems solved in 10 runs of different models</b>:
      </h3>

      <img src="media/figures/results.png" class="full-image" style="width:80%;padding-bottom: 2.5rem" alt="" />

      <div style="padding-left: 4rem; ">
        <p>
          Note that:
          <ul>
            <li><b>Diffusion-CCSP (ULA)</b>: our method with annealed unadjusted Langevin algorithm to sample from composed diffusion models.</li>
            <li><b>Diffusion-CCSP (Reverse)</b>: our method with the standard reverse diffusion process to sample from composed diffusion models. This method is faster at sampling than ULA, but is generally found to have worse generalization performance. </li>
            <li><b>StructDiffusion</b>Instead of composing diffusion models, a single Transformer is used that takes in a sequence of object embeddings, each of which is the concatenation of the geometry and pose embedding (and grasp embedding for Task 4) plus time embedding.</li>
            <li><b>Rejection-Sampling</b></li>: We sequentially sample each decision variable according to a generic sampler and check all constraints. For each variable, we sample at most 50 samples.
            <li>OOD = Out of Training Distribution.</li>
            <li>The sequential sampling baseline completely failed for task (c) and hard tasks in (b) and (d).</li>
        </p>
      </div>

      <h3 class="subtitle has-text-centered" style="padding-top: 2.5rem; ">
      The number of calls to Diffusion-CCSP increases as the problem becomes more difficult and the number of constraints increases.
      </h3>

      <img src="media/figures/results-tamp.png" class="full-image" style="width:70%;padding-bottom: 2.5rem" alt="" />

      <div style="padding-left: 4rem; ">
        <p>
          Note that:
          <ul>
            <li>In the 3D object stacking task, each call samples a support structure which determines the constraint graph.</li>
            <li>In the 3D object packing task, each call samples a placing sequence with a set of grasps. </li>
            <li>In a batch of 100 CCSPs, it takes on average 0.01-0.04 sec for Diffusion-CCSP (Reverse) to solve each CCSP while 0.06-0.19 sec for Diffusion-CCSP (ULA).
        </p>
      </div>



      <h3 class="subtitle has-text-centered" style="padding-top: 2.5rem; ">
      The following are learned gradient maps for geometric and some qualitative constraints.
      </h3>

      <img src="media/figures/gradient-fields.png" class="full-image" style="width:80%;padding-bottom: 2.5rem" alt="" />

    </div>
  </div>
</section>

</body>
</html>
