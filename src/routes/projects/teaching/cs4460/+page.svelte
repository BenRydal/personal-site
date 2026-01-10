<script lang="ts">
	import { ArrowLeft, Calendar, MapPin, Users, Mail, Clock } from 'lucide-svelte';
</script>

<svelte:head>
	<title>CS 4460: Information Visualization | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Information Visualization course at Georgia Tech - Spring 2020"
	/>
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
		<span class="font-mono bg-gray-100 px-2 py-1 rounded">CS 4460</span>
		<span>Georgia Institute of Technology</span>
	</div>

	<h1 class="text-4xl font-bold text-gray-900">Information Visualization</h1>

	<div class="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
		<span class="flex items-center gap-1">
			<Calendar class="w-4 h-4" />
			Spring 2020
		</span>
		<span class="flex items-center gap-1">
			<MapPin class="w-4 h-4" />
			Instructional Center 211
		</span>
		<span class="flex items-center gap-1">
			<Clock class="w-4 h-4" />
			T/Th 9:30-10:45am, Recitation Th 4:30-5:45pm
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
			<strong>TAs:</strong>
			<a
				href="https://codonn.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Cody O'Donnell</a
			>,
			<a
				href="https://arpitmathur.info/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Arpit Mathur</a
			>, Raveena Shah
		</p>
	</div>

	<!-- Course Overview -->
	<div class="mt-8">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Course Overview</h2>
		<p class="text-gray-600 leading-relaxed">
			An introduction to data visualization techniques from graphic design, computer science,
			architecture, semiotics, psychology, cartography, and cognitive science. Students apply
			techniques through team design projects developing interactive visualizations of real-world
			datasets. Format includes interactive lectures, discussions, design challenges, and
			assignments.
		</p>
		<p class="mt-3 text-gray-600 leading-relaxed">
			<strong>Target Audience:</strong> Students exploring visualization applications (HCI, data science,
			education, research) and those building computational/visualization tools.
		</p>
		<p class="mt-3 text-gray-600 leading-relaxed">
			<strong>Prerequisites:</strong> No formal prerequisites; basic knowledge of graphics tools (D3.js,
			Processing, p5.js, Vega, HTML5) and data analysis tools (Python, Excel, Matlab) expected.
		</p>
	</div>

	<!-- Learning Goals -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Learning Goals</h2>
		<ul class="space-y-2 text-gray-600">
			<li>Learn visualization techniques from multiple disciplines</li>
			<li>Develop interactive visualizations for real datasets using D3.js</li>
			<li>Address specific problems or user needs through design</li>
			<li>Explore visualization in HCI, data science, education, and research</li>
			<li>Build computational visualization tools and systems</li>
		</ul>
	</div>

	<!-- Grading -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Grading</h2>
		<div class="grid md:grid-cols-2 gap-4">
			<div class="bg-gray-50 rounded-lg p-4">
				<h3 class="font-medium text-gray-900 mb-2">Individual Assignments (33%)</h3>
				<ul class="text-sm text-gray-600 space-y-1">
					<li>Data Exploration & Analysis (5%)</li>
					<li>Critiquing Commercial Visualization System (10%)</li>
					<li>Personal Data Collection & Visualization (10%)</li>
					<li>Programming Assignments (8%)</li>
				</ul>
			</div>
			<div class="bg-gray-50 rounded-lg p-4">
				<h3 class="font-medium text-gray-900 mb-2">Team Project (40%)</h3>
				<ul class="text-sm text-gray-600 space-y-1">
					<li>Design Review I: Proposal & Task Analysis (5%)</li>
					<li>Design Review II: Concepts & Prototypes (10%)</li>
					<li>Design Review III: Final Presentation & Tool (25%)</li>
				</ul>
			</div>
			<div class="bg-gray-50 rounded-lg p-4">
				<h3 class="font-medium text-gray-900 mb-2">Participation (15%)</h3>
				<p class="text-sm text-gray-600">Attendance, Canvas posts, peer evaluations</p>
			</div>
			<div class="bg-gray-50 rounded-lg p-4">
				<h3 class="font-medium text-gray-900 mb-2">Summary Exam (12%)</h3>
				<p class="text-sm text-gray-600">In-class exam</p>
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
					<div><span class="text-gray-500">1/7</span> — Introductions & Course Overview</div>
					<div>
						<span class="text-gray-500">1/9</span> — Re-design & Concept Inventory
						<span class="text-gray-400">(Complete background survey, post to Canvas)</span>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 2</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">1/14</span> — Framing Visualization
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://queue.acm.org/detail.cfm?id=1805128"
									target="_blank"
									class="text-accent hover:underline">Touring the Visualization Zoo</a
								>
							</li>
							<li>
								<a
									href="https://medium.com/@lynn_72328/data-visualization-versus-ui-and-data-science-d59182d58af4"
									target="_blank"
									class="text-accent hover:underline"
									>Data Visualization 'versus' UI & Data Science</a
								>
							</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">1/16</span> — Framing Data in Visualization
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://www.pewresearch.org/fact-tank/2015/09/16/the-art-and-science-of-the-scatterplot/"
									target="_blank"
									class="text-accent hover:underline">Art & Science of the Scatterplot</a
								>
							</li>
							<li>
								<a
									href="https://arxiv.org/pdf/1901.01920.pdf"
									target="_blank"
									class="text-accent hover:underline">Data is Personal</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 3</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">1/21</span> — Intro to D3.js I
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://wattenberger.com/blog/d3#intro"
									target="_blank"
									class="text-accent hover:underline">Intro to/how to learn D3.js</a
								>
							</li>
							<li>
								<a
									href="http://vis.stanford.edu/files/2011-D3-InfoVis.pdf"
									target="_blank"
									class="text-accent hover:underline">D3: Data-Driven Documents</a
								> (skim)
							</li>
						</ul>
						<span class="text-highlight font-medium">DUE: Assignment 1</span>
					</div>
					<div>
						<span class="text-gray-500">1/23</span> — Intro to D3.js II
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://medium.com/@enjalot/the-hitchhikers-guide-to-d3-js-a8552174733a"
									target="_blank"
									class="text-accent hover:underline">Hitchhiker's Guide to D3.js</a
								>
							</li>
						</ul>
						<span class="text-highlight font-medium">DUE: Lab 1 (Friday)</span>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 4</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">1/28</span> — Perception, Cognition & Color
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://medium.com/@kennelliott/39-studies-about-human-perception-in-30-minutes-4728f9e31a73"
									target="_blank"
									class="text-accent hover:underline"
									>39 Studies About Human Perception in 30 Minutes</a
								>
							</li>
							<li>
								<a
									href="https://towardsdatascience.com/viz-palette-for-data-visualization-color-8e678d996077"
									target="_blank"
									class="text-accent hover:underline"
									>Visualization Palette for Data Visualization Color</a
								>
							</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">1/30</span> — Statistical Graphs
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://www.cs.unm.edu/~pgk/IVCDs14/minitufte.pdf"
									target="_blank"
									class="text-accent hover:underline">Chapter 1: Graphical Excellence</a
								> - Tufte
							</li>
							<li>
								<a
									href="https://policyviz.com/2018/01/11/fk-it-lets-use-pie-charts/"
									target="_blank"
									class="text-accent hover:underline">Use Pie Charts?</a
								>
							</li>
						</ul>
						<span class="text-highlight font-medium">DUE: Lab 2 (Friday)</span>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 5</h3>
				<div class="mt-2 space-y-2">
					<div><span class="text-gray-500">2/4</span> — Team Assignments/Project Discussion</div>
					<div>
						<span class="text-gray-500">2/6</span> — Visual Encoding I
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="http://giorgialupi.com/data-humanism-my-manifesto-for-a-new-data-wold"
									target="_blank"
									class="text-accent hover:underline">Data Humanism</a
								> - Giorgia Lupi
							</li>
							<li>
								<a
									href="https://www.ted.com/talks/giorgia_lupi_how_we_can_find_ourselves_in_data"
									target="_blank"
									class="text-accent hover:underline">How can we find ourselves in data</a
								> (TED Talk)
							</li>
						</ul>
						<span class="text-highlight font-medium">DUE: Lab 3 (Friday)</span>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 6</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">2/11</span> — Visual Encoding II
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://pdfs.semanticscholar.org/44b3/f7d39ee324c8fee57dec9c45f04acf0c2a71.pdf"
									target="_blank"
									class="text-accent hover:underline"
									>Information Visualization & Visual Data Mining</a
								>
							</li>
						</ul>
					</div>
					<div>
						<span class="text-gray-500">2/13</span> — Redesign Activities/Project Time
						<span class="text-highlight font-medium">DUE: Lab 4 (Friday)</span>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Week 7</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">2/18</span> —
						<span class="font-medium text-highlight">Design Review I</span>
					</div>
					<div>
						<span class="text-gray-500">2/20</span> — Data Storytelling & Communication
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="http://vis.stanford.edu/files/2010-Narrative-InfoVis.pdf"
									target="_blank"
									class="text-accent hover:underline">Narrative Visualization</a
								>
							</li>
						</ul>
						<span class="text-highlight font-medium">DUE: Lab 5 (Friday)</span>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 8</h3>
				<div class="mt-2 space-y-2">
					<div><span class="text-gray-500">2/25</span> — Tableau Tutorial</div>
					<div>
						<span class="text-gray-500">2/27</span> — Interaction I: Guest Visit (<a
							href="https://arjun010.github.io/"
							target="_blank"
							class="text-accent hover:underline">Arjun Srinivasan</a
						>)
						<ul class="ml-4 mt-1 text-gray-600">
							<li>
								<a
									href="https://drum.lib.umd.edu/bitstream/handle/1903/5784/TR_96-%C3%82%C2%AD%C3%A2%20%2066.pdf.?sequence=1"
									target="_blank"
									class="text-accent hover:underline">The Eyes Have It</a
								> - Shneiderman
							</li>
							<li>
								<a
									href="https://medium.com/@dominikus/the-end-of-interactive-visualizations-52c585dcafcb"
									target="_blank"
									class="text-accent hover:underline">The Death of Interactive Infographics?</a
								>
							</li>
							<li>
								<a
									href="https://www.vis4.net/blog/posts/in-defense-of-interactive-graphics/"
									target="_blank"
									class="text-accent hover:underline">In Defense of Interactive Graphics</a
								>
							</li>
						</ul>
						<span class="text-highlight font-medium">DUE: Lab 6 (Friday)</span>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 9</h3>
				<div class="mt-2 space-y-2">
					<div>
						<span class="text-gray-500">3/3</span> — Interaction II: Overview & Detail
						<span class="text-highlight font-medium">DUE: Assignment 2</span>
					</div>
					<div>
						<span class="text-gray-500">3/5</span> — Task, Analysis & Context
						<ul class="ml-4 mt-1 text-gray-600">
							<li>Re-read: The Eyes Have It</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Week 10</h3>
				<div class="mt-2 space-y-2">
					<div><span class="text-gray-500">3/10</span> — Project Work</div>
					<div>
						<span class="text-gray-500">3/12</span> —
						<span class="font-medium text-highlight">Design Review II</span>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Spring Break</h3>
				<div class="mt-2 text-gray-500">3/16-3/22 — No Classes</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 11</h3>
				<div class="mt-2 space-y-2">
					<div><span class="text-gray-500">3/31</span> — Course Planning/Technology Testing</div>
					<div><span class="text-gray-500">4/2</span> — Individual Team Meetings</div>
				</div>
			</div>

			<div class="border-l-2 border-gray-200 pl-4">
				<h3 class="font-semibold text-gray-900">Week 12</h3>
				<div class="mt-2 space-y-2">
					<div><span class="text-gray-500">4/7</span> — Exam Preparation</div>
					<div>
						<span class="text-gray-500">4/9</span> —
						<span class="font-medium">Summary Exam (In-Class)</span>
					</div>
				</div>
			</div>

			<div class="border-l-2 border-highlight pl-4">
				<h3 class="font-semibold text-gray-900">Week 13</h3>
				<div class="mt-2">
					<div>
						<span class="text-gray-500">4/21</span> —
						<span class="font-medium text-highlight">Design Review III & Course Conclusion</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Required Materials -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Required & Recommended Materials</h2>
		<ul class="space-y-2 text-gray-600">
			<li><strong>Required:</strong> Sketchbook with no lines</li>
			<li>
				<strong>Recommended:</strong>
				<a
					href="http://alignedleft.com/work/d3-book-2e"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Interactive Data Visualization for the Web, 2nd ed.</a
				> by Scott Murray
			</li>
			<li><strong>Recommended:</strong> Envisioning Information by Edward Tufte</li>
			<li>
				<strong>Recommended:</strong>
				<a
					href="https://www.newline.co/fullstack-d3"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Fullstack D3 and Data Visualization Guide</a
				> by Amelia Wattenberger
			</li>
		</ul>
	</div>

	<!-- Key Readings -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Key Readings</h2>
		<ul class="space-y-2 text-sm text-gray-600">
			<li>
				<a
					href="https://queue.acm.org/detail.cfm?id=1805128"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Touring the Visualization Zoo</a
				>
			</li>
			<li>
				<a
					href="https://drum.lib.umd.edu/bitstream/handle/1903/5784/TR_96-%C3%82%C2%AD%C3%A2%20%2066.pdf.?sequence=1"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">The Eyes Have It: A Task by Data Type Taxonomy</a
				> - Shneiderman
			</li>
			<li>
				<a
					href="https://www.cs.unm.edu/~pgk/IVCDs14/minitufte.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Chapter 1: Graphical Excellence</a
				> - Edward Tufte
			</li>
			<li>
				<a
					href="http://giorgialupi.com/data-humanism-my-manifesto-for-a-new-data-wold"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Data Humanism</a
				> - Giorgia Lupi
			</li>
			<li>
				<a
					href="http://vis.stanford.edu/files/2010-Narrative-InfoVis.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Narrative Visualization</a
				> - Segel & Heer
			</li>
			<li>
				<a
					href="https://arxiv.org/pdf/1901.01920.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Data is Personal</a
				>
			</li>
			<li>
				<a
					href="https://medium.com/@kennelliott/39-studies-about-human-perception-in-30-minutes-4728f9e31a73"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">39 Studies About Human Perception in 30 Minutes</a
				>
			</li>
			<li>
				<a
					href="http://vis.stanford.edu/files/2011-D3-InfoVis.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">D3: Data-Driven Documents</a
				>
			</li>
			<li>
				<a
					href="https://www.newyorker.com/culture/culture-desk/can-data-be-human-the-work-of-giorgia-lupi"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Can Data be Human?</a
				> - The New Yorker
			</li>
			<li>
				<a
					href="https://www.microsoft.com/en-us/research/uploads/prod/2019/08/emotional.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline"
					>An Emotional Response to the Value of Information Visualization</a
				>
			</li>
			<li>
				<a
					href="http://www.perceptualedge.com/articles/Whitepapers/Communicating_Numbers.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Effectively Communicating Numbers</a
				> - Stephen Few
			</li>
			<li>
				<a
					href="https://journalismcourses.org/courses/DE0618/3.DataVisualizationForHumanPerception.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Data Visualization for Human Perception</a
				>
			</li>
			<li>
				<a
					href="http://www.personal.psu.edu/cab38/ColorSch/ASApaper.html"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Color Use Guidelines for Data Representation</a
				>
			</li>
			<li>
				<a
					href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8017604"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Modeling Color Difference in Visualization Design</a
				>
			</li>
			<li>
				<a
					href="https://xeno.graphics/articles/on-graphonyms-the-importance-of-chart-type-names/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">On Graphonyms: The Importance of Chart Type Names</a
				>
			</li>
			<li>
				<a
					href="https://howwegettonext.com/when-charts-go-weird-the-joy-of-xenographics-dbe8a8bdff8f"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">When Charts Go Weird: The Joy of Xenographics</a
				>
			</li>
			<li>
				<a
					href="http://drops.dagstuhl.de/opus/volltexte/2016/5821/pdf/dagrep_v006_i002_p001_s16061.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline"
					>Exploration and Explanation in Data Driven Storytelling</a
				>
			</li>
			<li>
				<a
					href="http://michaelnielsen.org/reinventing_explanation/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Reinventing Explanation</a
				> - Michael Nielsen
			</li>
		</ul>
	</div>

	<!-- Video Resources -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Video Resources</h2>
		<ul class="space-y-2 text-sm text-gray-600">
			<li>
				<a
					href="https://vimeo.com/98986594"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">The Value of Visualization</a
				>
			</li>
			<li>
				<a
					href="https://www.youtube.com/watch?v=9uaHRWj04D4"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Vega-Lite: A Grammar of Interactive Graphics</a
				>
			</li>
			<li>
				<a
					href="https://open-video.org//details.php?videoid=8304"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Table Lens Demo</a
				>
			</li>
			<li>
				<a
					href="https://www.youtube.com/watch?v=GEBx-XTrGps"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">EZChooser Demo</a
				>
			</li>
			<li>
				<a
					href="https://vcg.seas.harvard.edu/files/pfister/files/2013_infovis_lineup.mp4"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">LineUp Demo</a
				>
			</li>
			<li>
				<a
					href="https://parametric.press/issue-01/unraveling-the-jpeg/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Unraveling the JPEG</a
				> - Parametric Press
			</li>
		</ul>
	</div>

	<!-- Team Project -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Team Project</h2>
		<p class="text-gray-600 leading-relaxed">
			Teams of 3-4 members work throughout the semester to select or collect a dataset, develop an
			interactive visualization addressing a specific problem, and implement it using D3.js or
			comparable language/library. Three design reviews provide structured feedback.
		</p>
		<div class="mt-4">
			<h3 class="font-medium text-gray-900 mb-2">Project Resources</h3>
			<ul class="space-y-1 text-sm text-gray-600">
				<li>
					<a
						href="https://docs.google.com/document/d/122GLuyEnhQbAFbOMGqnj4nSAD2OW13DpkAxsxsGJTsA/edit?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						class="text-accent hover:underline">Open Data Resources for Atlanta/Georgia</a
					>
				</li>
				<li>
					<a
						href="https://docs.google.com/document/d/1Reocwk9LhwXMBV3J9t0IdF4lKNySTQ0AWY3x1n5_D_g/edit?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						class="text-accent hover:underline"
						>Example Data Sources for Information Visualization</a
					>
				</li>
			</ul>
		</div>
	</div>

	<!-- Software & Tools -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Software & Tools</h2>
		<div class="grid md:grid-cols-2 gap-6">
			<div>
				<h3 class="font-medium text-gray-900 mb-2">Programming & Visualization</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="https://d3js.org/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">D3.js</a
						>
					</li>
					<li>
						<a
							href="https://processing.org/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Processing</a
						>
					</li>
					<li>
						<a
							href="http://p5js.org/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">p5.js</a
						>
					</li>
					<li>
						<a
							href="https://vega.github.io/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Vega & Vega-Lite</a
						>
					</li>
					<li>
						<a
							href="http://data-illustrator.com/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Data Illustrator</a
						>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="font-medium text-gray-900 mb-2">Commercial Tools</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="https://www.tableau.com/academic/students"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Tableau for Students</a
						>
					</li>
					<li>
						<a
							href="https://flourish.studio/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Flourish</a
						>
					</li>
					<li>
						<a
							href="https://www.tibco.com/products/tibco-spotfire"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Spotfire</a
						>
					</li>
					<li>
						<a
							href="https://www.trifacta.com/products/wrangler-editions/#wrangler"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Trifacta Wrangler</a
						>
					</li>
					<li>
						<a
							href="https://www.infozoom.com/en/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Infozoom</a
						>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="font-medium text-gray-900 mb-2">Data Preparation</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="http://openrefine.org/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">OpenRefine</a
						>
					</li>
					<li>
						<a
							href="http://trifacta.com/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Trifacta</a
						>
					</li>
					<li>
						<a
							href="https://journalismcourses.org/courses/DE0618/0_tidyData.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Tidy Data</a
						>
					</li>
					<li>
						<a
							href="https://datajournalism.com/watch/cleaning-data-in-excel"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Cleaning Data in Excel</a
						>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="font-medium text-gray-900 mb-2">Color & Chart Tools</h3>
				<ul class="space-y-1 text-sm text-gray-600">
					<li>
						<a
							href="http://colorbrewer2.org/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">ColorBrewer</a
						>
					</li>
					<li>
						<a
							href="http://www.datavizcatalogue.com/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">DataVizCatalogue</a
						>
					</li>
					<li>
						<a
							href="https://depictdatastudio.com/charts/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Interactive Chart Chooser</a
						>
					</li>
					<li>
						<a
							href="https://github.com/ft-interactive/chart-doctor/tree/master/visual-vocabulary"
							target="_blank"
							rel="noopener noreferrer"
							class="text-accent hover:underline">Visual Vocabulary</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Visualization Blogs & Resources -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Visualization Blogs & Resources</h2>
		<div class="grid md:grid-cols-3 gap-2 text-sm">
			<a
				href="http://flowingdata.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Flowing Data</a
			>
			<a
				href="http://datajournalism.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Data Journalism</a
			>
			<a
				href="https://medium.com/fathominfo"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Fathom Notebook</a
			>
			<a
				href="https://informationisbeautiful.net/beautifulnews/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Beautiful News</a
			>
			<a
				href="https://parametric.press/issue-01/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Parametric Press</a
			>
			<a
				href="http://www.thefunctionalart.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">The Functional Art</a
			>
			<a
				href="https://www.visualisingdata.com/resources/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Visualizing Data</a
			>
			<a
				href="http://www.visualcomplexity.com/vc/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Visual Complexity</a
			>
			<a
				href="http://www.edwardtufte.com/bboard/q-and-a?topic_id=1"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Edward Tufte Forum</a
			>
			<a
				href="http://www.perceptualedge.com/blog/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Stephen Few's Blog</a
			>
			<a
				href="http://andrewgelman.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Andrew Gelman's Blog</a
			>
			<a
				href="http://www.informationisbeautiful.net/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Information is Beautiful</a
			>
			<a
				href="https://fivethirtyeight.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">FiveThirtyEight</a
			>
			<a
				href="https://dataelixir.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Data Elixir</a
			>
			<a
				href="http://blog.visual.ly/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Visual.ly</a
			>
			<a
				href="https://www.gapminder.org/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Gapminder</a
			>
			<a
				href="https://fathom.info/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Fathom Information Design</a
			>
			<a
				href="http://www.storytellingwithdata.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Storytelling with Data</a
			>
			<a
				href="http://albertocairo.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Alberto Cairo</a
			>
			<a
				href="https://www.juiceanalytics.com/writing/the-ultimate-collection-of-data-storytelling-resources"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Data Storytelling Resources</a
			>
		</div>
	</div>

	<!-- Historical & Inspiration -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Historical & Inspiration</h2>
		<ul class="space-y-1 text-sm text-gray-600">
			<li>
				<a
					href="https://www.edwardtufte.com/tufte/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Edward Tufte</a
				>
			</li>
			<li>
				<a
					href="https://www.edwardtufte.com/tufte/books_ei"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Envisioning Information</a
				> - Tufte
			</li>
			<li>
				<a
					href="https://www.naacp.org/naacp-history-w-e-b-dubois/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">W.E.B. Du Bois Data Visualizations</a
				> - NAACP History
			</li>
		</ul>
	</div>

	<!-- Additional Resources -->
	<div class="mt-10">
		<h2 class="text-xl font-semibold text-gray-900 mb-3">Additional Resources</h2>
		<ul class="space-y-1 text-sm text-gray-600">
			<li>
				<a
					href="https://courses.cs.washington.edu/courses/cse442/18au/resources.html"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Jeffrey Heer's Resources</a
				>
			</li>
			<li>
				<a
					href="https://www.cc.gatech.edu/~stasko/7450/resources.html"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">John Stasko's Resources</a
				>
			</li>
			<li>
				<a
					href="https://journalismcourses.org/data-viz-course-material.html"
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent hover:underline">Data Visualization for Storytelling & Discovery</a
				>
			</li>
		</ul>
	</div>

	<!-- Acknowledgements -->
	<div class="mt-10 pt-8 border-t border-gray-200">
		<h2 class="text-lg font-semibold text-gray-900 mb-3">Acknowledgements</h2>
		<p class="text-sm text-gray-600 leading-relaxed">
			Course integrates ideas from
			<a
				href="https://www.cc.gatech.edu/~stasko/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">John Stasko</a
			>,
			<a
				href="https://homes.cs.washington.edu/~jheer/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Jeffrey Heer</a
			>,
			<a
				href="http://innovis.cpsc.ucalgary.ca/People/SheelaghCarpendale"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Sheelagh Carpendale</a
			>,
			<a
				href="http://albertocairo.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Alberto Cairo</a
			>,
			<a
				href="http://danielleszafir.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Danielle Szafir</a
			>,
			<a
				href="http://va.gatech.edu/endert/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Alex Endert</a
			>,
			<a
				href="http://hadley.nz/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Hadley Wickham</a
			>,
			<a
				href="https://sites.education.miami.edu/faculty/kahn-jennifer/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-accent hover:underline">Jennifer Kahn</a
			>, and others in information visualization and education.
		</p>
	</div>
</div>
