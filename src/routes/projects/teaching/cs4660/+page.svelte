<script lang="ts">
	import { ArrowLeft, Calendar, MapPin, Users, Clock } from 'lucide-svelte';
</script>

<svelte:head>
	<title>CS 4660/6460: Educational Technology | Ben Rydal Shapiro</title>
	<meta name="description" content="Educational Technology course at Georgia Tech - Spring 2019" />
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-16">
	<a
		href="/projects/teaching"
		class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8"
	>
		<ArrowLeft class="w-4 h-4" />
		Back to Teaching
	</a>

	<div class="flex items-center gap-3 text-sm text-gray-500 mb-4">
		<span class="font-mono bg-gray-100 px-2 py-1 rounded">CS 4660/6460</span>
		<span>Georgia Institute of Technology</span>
	</div>

	<h1 class="text-4xl font-bold text-gray-900">Educational Technology</h1>

	<div class="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
		<span class="flex items-center gap-1">
			<Calendar class="w-4 h-4" />
			Spring 2019
		</span>
		<span class="flex items-center gap-1">
			<MapPin class="w-4 h-4" />
			Instructional Center 205
		</span>
		<span class="flex items-center gap-1">
			<Clock class="w-4 h-4" />
			T/Th 3:00-4:15pm
		</span>
	</div>

	<!-- Teaching Team -->
	<div class="mt-6 p-4 bg-gray-50 rounded-lg">
		<div class="flex items-center gap-2 mb-2">
			<Users class="w-4 h-4 text-gray-600" />
			<span class="font-medium text-gray-900">Teaching Team</span>
		</div>
		<p class="text-sm text-gray-600">
			<strong>Instructor:</strong> Dr. Ben Rydal Shapiro
			<br />
			<strong>Office Hours:</strong> Wednesday 2-3pm, TSRB 220
			<br />
			<strong>TAs:</strong> Karthik Bhat, Edwin Zhao
		</p>
	</div>

	<!-- Course Overview -->
	<div class="mt-8">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Course Overview</h2>
		<p class="text-gray-600 leading-relaxed">
			Students explore contemporary educational theories and their applications to educational
			technology design across diverse contexts—including schools, universities, museums, MOOCs, and
			online communities. The course combines discussion, design challenges, assignments, and
			interactive lectures to develop competencies in understanding educational theory, determining
			design implications, and critically assessing technology.
		</p>
	</div>

	<!-- Learning Objectives -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Learning Objectives</h2>
		<ul class="space-y-2 text-gray-600">
			<li>
				Understand basic assumptions, concepts, and principles of different educational theories
			</li>
			<li>Apply theoretical frameworks to educational technology design decisions</li>
			<li>Compare theories across varied educational settings through critical analysis</li>
		</ul>
	</div>

	<!-- Grading -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Grading</h2>
		<div class="grid md:grid-cols-3 gap-4">
			<div class="bg-gray-50 rounded-lg p-4">
				<h3 class="font-medium text-gray-900 mb-2">Participation (25%)</h3>
				<p class="text-sm text-gray-600">Attendance, peer evaluations, discussion contributions</p>
			</div>
			<div class="bg-gray-50 rounded-lg p-4">
				<h3 class="font-medium text-gray-900 mb-2">Individual Assignments (30%)</h3>
				<ul class="text-sm text-gray-600 space-y-1">
					<li>Educational technology analysis (10%)</li>
					<li>Concept analysis (10%)</li>
					<li>Personal learning geography (10%)</li>
				</ul>
			</div>
			<div class="bg-gray-50 rounded-lg p-4">
				<h3 class="font-medium text-gray-900 mb-2">Team Project (45%)</h3>
				<ul class="text-sm text-gray-600 space-y-1">
					<li>Design Review I: Proposal & lit review (10%)</li>
					<li>Design Review II: Concepts & prototypes (10%)</li>
					<li>Design Review III: Final presentation (25%)</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Course Schedule -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Course Schedule</h2>
		<div class="space-y-6 text-sm">
			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 1</h3>
				<div class="mt-2 space-y-2">
					<div><span class="text-gray-500">1/8</span> — Introductions & course overview</div>
					<div>
						<span class="text-gray-500">1/10</span> — Personal learning design activity
						<span class="text-gray-400">(Complete background survey)</span>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 2</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">1/15</span> — Framing teaching
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Cohen, D. "Teaching and its predicaments" Chapter 5</li>
							<li>Canvas discussion post due</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">1/17</span> — Framing learning
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://www.nap.edu/read/9853/chapter/3"
									target="_blank"
									class="text-accent hover:underline">How People Learn, Chapter 1</a
								>
							</li>
							<li>
								<a
									href="https://people.ucsc.edu/~gwells/Files/Courses_Folder/documents/lave1996_teaching.pdf"
									target="_blank"
									class="text-accent hover:underline">Teaching, as Learning, in Practice</a
								> - Lave
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 3</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">1/22</span> — Learner Centered Design
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Guzdial, M. "Learner centered design for computing education" Chapters 1-2</li>
							<li>
								<a
									href="http://wikieducator.org/images/5/59/Kohl_I_Won%27t_Learn_from_You.pdf"
									target="_blank"
									class="text-accent hover:underline">I Won't Learn from You</a
								> - Kohl
							</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">1/24</span> — Educational design approaches
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://www.youtube.com/watch?v=AokN3TOMUhw"
									target="_blank"
									class="text-accent hover:underline">Creativity & Puny Ideas that Work</a
								> - D. Owens (video)
							</li>
							<li>Canvas discussion post due</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Week 4</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">1/29</span> — Team assignments
						<span class="text-highlight font-medium">DUE: Assignment 1</span>
					</div>
					<div>
						<span class="text-gray-500">1/31</span> — Team assignments
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Canvas discussion post (project ideas)</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 5</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">2/5</span> — Making/the Maker Movement
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://www.youtube.com/watch?v=mlrB6npbwVQ"
									target="_blank"
									class="text-accent hover:underline">We Are All Makers</a
								> - Dale Dougherty (video)
							</li>
							<li>
								<a
									href="https://pdfs.semanticscholar.org/fa5b/4e88c78f380b4727d445afa33bea5212a21d.pdf"
									target="_blank"
									class="text-accent hover:underline"
									>Making Through the Lens of Culture and Power</a
								> - Vossoughi et al.
							</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">2/7</span> — Constructionism in & out of schools
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://mindstorms.media.mit.edu/"
									target="_blank"
									class="text-accent hover:underline">Mindstorms Introduction</a
								> - Papert
							</li>
							<li>
								<a
									href="https://www.youtube.com/watch?v=y3jYVe1RGaU"
									target="_blank"
									class="text-accent hover:underline">Build a School in the Cloud</a
								> - Sugata Mitra (video)
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 6</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">2/12</span> — Constructionism & music
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="http://web.media.mit.edu/~mres/papers/pianos/pianos.html"
									target="_blank"
									class="text-accent hover:underline">Pianos Not Stereos</a
								> - Resnick, Bruckman & Martin
							</li>
							<li>Canvas discussion post due</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">2/14</span> — Digital Mapping I
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								Review: <a
									href="https://www.socialexplorer.com/"
									target="_blank"
									class="text-accent hover:underline">Social Explorer</a
								>,
								<a href="https://siftr.org/" target="_blank" class="text-accent hover:underline"
									>Siftr</a
								>, or
								<a
									href="http://storymaps.arcgis.com/"
									target="_blank"
									class="text-accent hover:underline">Story Maps</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Week 7</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">2/19</span> — Project Discussion
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Bring 2-3 peer-reviewed articles relevant to project</li>
							<li>Bring 3 comparable educational technologies</li>
						</ul>
						<span class="text-highlight font-medium">DUE: Assignment 2</span>
					</div>
					<div>
						<span class="text-gray-500">2/21</span> — Digital Mapping II (Re-Shape)
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://science360.gov/obj/video/04cadac9-a5ae-45fd-b34a-728d48b4aa67/mobile-city-science-counter-mapping-neighborhood"
									target="_blank"
									class="text-accent hover:underline">Mobile City Science</a
								> (video)
							</li>
							<li>
								<a
									href="https://peabody.vanderbilt.edu/departments/tl/teaching_and_learning_research/space_learning_mobility/Taylor_bicycles.pdf"
									target="_blank"
									class="text-accent hover:underline"
									>Counter Mapping the Neighborhood on Bicycles</a
								> - Taylor & Hall
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Week 8</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">2/26</span> —
						<span class="font-medium text-highlight">Design Review I</span>
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Project proposal & literature review due</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">2/28</span> — Site visit to design context
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Canvas discussion post due</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 9</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">3/5</span> — Framing teaching & learning at scale
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://vimeo.com/45792110"
									target="_blank"
									class="text-accent hover:underline">Fighting for Technology Equity</a
								> - J. Reich (video)
							</li>
							<li>
								<a
									href="https://www.youtube.com/watch?v=WbCguICyfTA"
									target="_blank"
									class="text-accent hover:underline">A Teaching Assistant Named Jill Watson</a
								> - A. Goel (video)
							</li>
							<li>
								Skim: <a
									href="https://learningatscale.acm.org/las2019/"
									target="_blank"
									class="text-accent hover:underline">Learning @ Scale Conference</a
								>
							</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">3/7</span> — Online Learning
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								Analyze 1 video from <a
									href="https://www.coursera.org/learn/modpo"
									target="_blank"
									class="text-accent hover:underline">Modern Poetry</a
								> (Coursera)
							</li>
							<li>
								Analyze 1 programming video from <a
									href="http://udacity.com/"
									target="_blank"
									class="text-accent hover:underline">Udacity</a
								>
							</li>
							<li>Canvas discussion post due</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Week 10</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">3/12</span> — Project ideating/prototyping
						<span class="text-highlight font-medium">DUE: Assignment 3</span>
					</div>
					<div>
						<span class="text-gray-500">3/14</span> — Interest driven & connected learning
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://dmlhub.net/wp-content/uploads/files/Connected_Learning_report.pdf"
									target="_blank"
									class="text-accent hover:underline">Connected Learning Report</a
								> - Ito et al. (pages 1-32)
							</li>
							<li>Canvas discussion post due</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Spring Break</h3>
				<div class="mt-2 text-gray-500">3/18-3/22 — No Classes</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Week 11</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">3/26</span> — Project Prototyping
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Email professor with 1-paragraph prototype update</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">3/28</span> —
						<span class="font-medium text-highlight">Design Review II</span>
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Team concept analysis & prototypes due</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 12</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">4/2</span> — PBL: A BME Perspective
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								Meet at <a
									href="https://bme.gatech.edu/bme/ua-whitaker-building"
									target="_blank"
									class="text-accent hover:underline">Whittaker Building</a
								>
							</li>
							<li>
								<a
									href="https://bme.gatech.edu/bme/problem-based-learning"
									target="_blank"
									class="text-accent hover:underline"
									>Building a Better BME with Problem Based Learning</a
								>
							</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">4/4</span> — Games & Education
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Bring most meaningful game you've learned with</li>
							<li>
								<a
									href="http://scottnicholson.com/pubs/recipepreprint.pdf"
									target="_blank"
									class="text-accent hover:underline">A Recipe for Meaningful Gamification</a
								> - Nicholson
							</li>
							<li>
								<a
									href="http://bogost.com/writing/blog/gamification_is_bullshit/"
									target="_blank"
									class="text-accent hover:underline">Gamification is Bullshit</a
								> - Bogost (skim)
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 13</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">4/9</span> — Education data science
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://drive.google.com/file/d/16WLwWUdeaclbLrt68Oj2b_ccXj2PDs6N/view"
									target="_blank"
									class="text-accent hover:underline">Situating Education Data Science</a
								>
							</li>
							<li>
								<a
									href="https://escholarship.org/uc/item/7gv0q9dc"
									target="_blank"
									class="text-accent hover:underline">Data Science Education Dilemma</a
								>
							</li>
							<li>Canvas discussion post due</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">4/11</span> — Learning & design in museums
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="http://tidal.northwestern.edu/media/files/pubs/pn4758-robertsA.pdf"
									target="_blank"
									class="text-accent hover:underline">Digital Exhibit Labels in Museums</a
								> - Roberts et al.
							</li>
							<li>
								<a
									href="https://www.researchgate.net/publication/328562352_Personal_Curation_in_a_Museum"
									target="_blank"
									class="text-accent hover:underline">Personal Curation in a Museum</a
								> - Shapiro & Hall
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 14</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">4/16</span> — Lab Atlanta Visit
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								Read one <a
									href="https://medium.com/lab-atlanta"
									target="_blank"
									class="text-accent hover:underline">Lab Atlanta Field Note</a
								> of interest
							</li>
							<li>Bring prototype to share with Lab Atlanta students</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">4/18</span> — Guest Visit: K-12 Edtech Integration
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://generalassemb.ly/blog/what-is-edtech/"
									target="_blank"
									class="text-accent hover:underline">What is EdTech and Why Should it Matter</a
								>
							</li>
							<li>
								<a
									href="https://elearningindustry.com/educational-technology-trends-top-right-now"
									target="_blank"
									class="text-accent hover:underline">Top 6 Educational Technology Trends</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Week 15</h3>
				<div class="mt-2">
					<div>
						<span class="text-gray-500">4/23</span> —
						<span class="font-medium text-highlight">Design Review III & Course Conclusion</span>
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Final presentation & design implementation due</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Readings & Resources by Week -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Readings & Resources</h2>

		<div class="space-y-6">
			<div>
				<h3 class="font-medium text-gray-900 mb-2">Foundational Theory</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>Cohen, D. "Teaching and its predicaments" Chapter 5</li>
					<li>
						<a
							href="https://www.nap.edu/read/9853/chapter/3"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">How People Learn, Chapter 1</a
						>
					</li>
					<li>
						<a
							href="https://people.ucsc.edu/~gwells/Files/Courses_Folder/documents/lave1996_teaching.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Teaching, as Learning, in Practice</a
						> - Lave, J.
					</li>
					<li>Guzdial, M. "Learner centered design for computing education" Chapters 1-2</li>
					<li>
						<a
							href="http://wikieducator.org/images/5/59/Kohl_I_Won%27t_Learn_from_You.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">I Won't Learn from You</a
						> - Kohl, H.
					</li>
				</ul>
			</div>

			<div>
				<h3 class="font-medium text-gray-900 mb-2">Constructionism & Making</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="https://www.youtube.com/watch?v=mlrB6npbwVQ"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">We Are All Makers</a
						> - Dale Dougherty (Video)
					</li>
					<li>
						<a
							href="https://pdfs.semanticscholar.org/fa5b/4e88c78f380b4727d445afa33bea5212a21d.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Making Through the Lens of Culture and Power</a
						> - Vossoughi et al.
					</li>
					<li>
						<a
							href="https://mindstorms.media.mit.edu/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Mindstorms Introduction</a
						> - Papert
					</li>
					<li>
						<a
							href="https://www.youtube.com/watch?v=y3jYVe1RGaU"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Build a School in the Cloud</a
						> - Sugata Mitra (Video)
					</li>
					<li>
						<a
							href="http://web.media.mit.edu/~mres/papers/pianos/pianos.html"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Pianos Not Stereos</a
						> - Resnick, Bruckman & Martin
					</li>
					<li>
						<a
							href="http://morganya.org/research/2018-Ames-CSCW-Constructionism.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Hackers, Computers & Cooperation</a
						> - Ames (optional)
					</li>
				</ul>
			</div>

			<div>
				<h3 class="font-medium text-gray-900 mb-2">Digital Mapping & Geography</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="https://www.socialexplorer.com/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Social Explorer</a
						>
					</li>
					<li>
						<a
							href="https://siftr.org/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Siftr</a
						>
					</li>
					<li>
						<a
							href="http://storymaps.arcgis.com/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Story Maps - ArcGIS</a
						>
					</li>
					<li>
						<a
							href="https://science360.gov/obj/video/04cadac9-a5ae-45fd-b34a-728d48b4aa67/mobile-city-science-counter-mapping-neighborhood"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Mobile City Science</a
						> (Video)
					</li>
					<li>
						<a
							href="https://peabody.vanderbilt.edu/departments/tl/teaching_and_learning_research/space_learning_mobility/Taylor_bicycles.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Counter Mapping the Neighborhood on Bicycles</a
						> - Taylor & Hall
					</li>
				</ul>
			</div>

			<div>
				<h3 class="font-medium text-gray-900 mb-2">Learning at Scale & Online Learning</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="https://vimeo.com/45792110"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Fighting for Technology Equity</a
						> - J. Reich (Video)
					</li>
					<li>
						<a
							href="https://www.youtube.com/watch?v=WbCguICyfTA"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">A Teaching Assistant Named Jill Watson</a
						> - A. Goel (Video)
					</li>
					<li>
						<a
							href="https://learningatscale.acm.org/las2019/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Learning @ Scale Conference</a
						>
					</li>
					<li>
						<a
							href="http://caed-lab.com/aied2019/index.html"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Artificial Intelligence in Education Conference</a
						>
					</li>
					<li>
						<a
							href="https://www.coursera.org/learn/modpo"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Modern Poetry - Coursera</a
						>
					</li>
					<li>
						<a
							href="https://dmlhub.net/wp-content/uploads/files/Connected_Learning_report.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Connected Learning Report</a
						> - Ito et al.
					</li>
				</ul>
			</div>

			<div>
				<h3 class="font-medium text-gray-900 mb-2">Games & Problem-Based Learning</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="https://bme.gatech.edu/bme/problem-based-learning"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline"
							>Building a Better BME with Problem Based Learning</a
						>
					</li>
					<li>
						<a
							href="http://scottnicholson.com/pubs/recipepreprint.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">A Recipe for Meaningful Gamification</a
						> - Scott Nicholson
					</li>
					<li>
						<a
							href="http://bogost.com/writing/blog/gamification_is_bullshit/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Gamification is Bullshit</a
						> - Ian Bogost
					</li>
					<li>
						<a
							href="https://website.education.wisc.edu/kdsquire/tenure-files/02-squire-ed-tech-refchecV3.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Video Games & Education</a
						> - Squire (optional)
					</li>
					<li>
						<a
							href="http://www.digra.org/wp-content/uploads/digital-library/09287.35217.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Glitch Game Testers</a
						> - DiSalvo (optional)
					</li>
					<li>
						<a
							href="http://journals.sagepub.com/doi/pdf/10.3102/0034654315582065"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline"
							>Games & Learning: Systematic Review & Meta-Analysis</a
						> - Clark (optional)
					</li>
				</ul>
			</div>

			<div>
				<h3 class="font-medium text-gray-900 mb-2">Data Science & Museums</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="https://drive.google.com/file/d/16WLwWUdeaclbLrt68Oj2b_ccXj2PDs6N/view"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Situating Education Data Science</a
						>
					</li>
					<li>
						<a
							href="https://escholarship.org/uc/item/7gv0q9dc"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Data Science Education Dilemma</a
						>
					</li>
					<li>
						<a
							href="https://digitalcommons.usu.edu/cgi/viewcontent.cgi?article=1480&context=itls_facpub"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline"
							>Quantified Self Movement & Educational Technology</a
						> (optional)
					</li>
					<li>
						<a
							href="http://tidal.northwestern.edu/media/files/pubs/pn4758-robertsA.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Digital Exhibit Labels in Museums</a
						> - Roberts et al.
					</li>
					<li>
						<a
							href="https://www.researchgate.net/publication/328562352_Personal_Curation_in_a_Museum"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Personal Curation in a Museum</a
						> - Shapiro & Hall
					</li>
				</ul>
			</div>

			<div>
				<h3 class="font-medium text-gray-900 mb-2">K-12 EdTech</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="https://medium.com/lab-atlanta"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Lab Atlanta Field Notes</a
						>
					</li>
					<li>
						<a
							href="https://generalassemb.ly/blog/what-is-edtech/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">What is EdTech and Why Should it Matter</a
						>
					</li>
					<li>
						<a
							href="https://elearningindustry.com/educational-technology-trends-top-right-now"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Top 6 Educational Technology Trends</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Academic Resources -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Academic Resources</h2>
		<ul class="space-y-1 text-sm text-gray-600">
			<li>
				<a
					href="http://journals.sagepub.com/home/rer"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Review of Educational Research</a
				>
			</li>
			<li>
				<a
					href="https://dl.acm.org/event.cfm?id=RE151"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">ACM CHI Conference</a
				>
			</li>
			<li>
				<a
					href="https://sigchi.org/conferences/conference-history/idc/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Interaction Design & Children (IDC)</a
				>
			</li>
			<li>
				<a
					href="https://dl.acm.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">ACM Digital Library</a
				>
			</li>
		</ul>
	</div>

	<!-- Team Project -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Team Project</h2>
		<p class="text-gray-600 leading-relaxed">
			Teams of 4-6 develop projects addressing authentic educational contexts, with focus areas
			including Georgia Tech campus initiatives and digital mapping applications. Three design
			reviews provide structured feedback throughout the semester.
		</p>
	</div>
</div>
