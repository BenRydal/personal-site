<script lang="ts">
	import { GraduationCap, Users, BookOpen, ExternalLink } from 'lucide-svelte';

	const phdStudents = [
		{
			name: 'Edwin Zhao',
			background: 'Senior technical leader in large-scale cloud and distributed systems',
			focus: 'Learning sciences, data science, and information visualization'
		},
		{
			name: 'Sierra Gilliam',
			background: 'Former CS teacher & drone program founder',
			focus: 'Geography, computer science, and sociocultural perspectives',
			link: 'https://twitter.com/Si_Gilliam'
		}
	];

	const mastersStudents = [
		{ name: 'Arpit Mathur', placement: 'MathWorks', link: 'https://arpitmathur.info/' },
		{
			name: "Cody O'Donnell",
			placement: 'Lawrence Berkeley National Laboratory',
			link: 'https://codonn.com/'
		},
		{ name: 'Charlotte Lou', placement: 'HubSpot' },
		{ name: 'Malika Hajiani' }
	];

	const undergraduateStudents = [
		{ name: 'Christine W. Hsieh', link: 'https://www.linkedin.com/in/chsieh40' },
		{ name: 'Bianca A. Dankwa' },
		{ name: 'Gabe DuBose' }
	];

	const dissertations = [
		{
			name: 'Sierra Gilliam',
			year: 2025,
			title:
				'Visualizing Spatial Pedagogies in a Maker-Based Classroom: An Interaction Geography Perspective',
			link: 'https://scholarworks.gsu.edu/entities/publication/9920f7ba-efce-4aa2-910e-defdaa383396'
		},
		{
			name: 'Erin Anderson',
			year: 2025,
			title:
				'An Examination of TeachLivE and Mursion Mixed-Reality Simulations To Develop More Equitable and Critical Teacher Training',
			link: 'https://scholarworks.gsu.edu/items/bf8bfd3d-650b-4129-8a2b-bc270c034dca'
		},
		{
			name: 'Lia Haddadian',
			year: 2025,
			title:
				'Enhancing Argumentative Writing in EFL Education Through AI-Powered Personalized Learning'
		},
		{
			name: 'Ali Heidari',
			year: 2024,
			title:
				"Examining Learner's Evaluative Judgment Supported by Technology-Enabled Feedback Information",
			link: 'https://scholarworks.gsu.edu/items/295cb733-243c-4a0a-b73e-25198cb4754d'
		},
		{
			name: 'Bryan Cox',
			year: 2023,
			title: 'Building Computer Science Teacher Capacity with Integrated Computing',
			link: 'https://scholarworks.gsu.edu/items/220729c2-07ca-4540-8d31-f896b9fe2744'
		},
		{
			name: 'Amber Solomon',
			year: 2021,
			title: 'Embodiment in Computer Science Learning',
			link: 'https://repository.gatech.edu/entities/publication/5cd85cdb-12e4-4599-a60b-ae6ea724a072'
		}
	];

	const universities = [
		{
			name: 'Georgia State University',
			courses: [
				{
					name: 'Sociocultural & Design Based Foundations of Learning Sciences',
					link: 'https://docs.google.com/document/d/1Ff_nggZaRk-wRh8d1q0mEVnlI0J43uMQ6KKdBa0dEWQ/edit?usp=sharing'
				},
				{
					name: 'Computer-Supported Collaborative Learning',
					link: 'https://docs.google.com/document/d/1Sn1Dip1EXTkBdpZh26GDPVlHh84yaL696iPCE-Jb4Lo/edit?usp=sharing'
				},
				'Computer Science Concepts for Teachers',
				'Instructional Technology in School Based Learning Environments',
				'Computer Skills for an Information Age'
			]
		},
		{
			name: 'Georgia Institute of Technology',
			courses: [
				{ name: 'Information Visualization', link: '/projects/teaching/cs4460' },
				{ name: 'Educational Technology', link: '/projects/teaching/cs4660' },
				{ name: 'Computing, Society & Professionalism', link: '/projects/teaching/cs4001' }
			]
		},
		{
			name: 'Vanderbilt University',
			courses: [
				{
					name: 'Leading Innovation in Arts & Culture',
					note: 'MOOC',
					link: 'https://www.coursera.org/learn/arts-culture-innovation'
				},
				{
					name: 'Leading Strategic Innovation in Organizations',
					note: 'MOOC',
					link: 'https://www.coursera.org/learn/strategic-innovation-organizations'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Teaching | Ben Rydal Shapiro</title>
	<meta
		name="description"
		content="Courses, workshops, and advising in learning sciences, data visualization, and computing education."
	/>
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-16">
	<h1 class="text-4xl font-bold text-gray-900">Teaching</h1>

	<p class="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl">
		I teach courses spanning learning sciences, data visualization, and computing education. My
		approach emphasizes hands-on learning, connecting theory to practice, and helping students
		develop critical perspectives on technology and education.
	</p>

	<!-- Advising & Mentoring -->
	<section class="mt-16">
		<div class="flex items-center gap-3 mb-8">
			<Users class="w-6 h-6 text-highlight" />
			<h2 class="text-2xl font-bold text-gray-900">Advising & Mentoring</h2>
		</div>

		<div class="grid md:grid-cols-2 gap-6">
			<!-- Students Card -->
			<div class="bg-gray-50 rounded-xl p-6">
				<h3 class="font-semibold text-gray-900">Students</h3>

				<h4 class="font-semibold text-gray-700 mt-5 mb-3 flex items-center gap-2">
					<GraduationCap class="w-4 h-4 text-gray-600" />
					Current PhD Students
				</h4>
				<div class="space-y-4">
					{#each phdStudents as student}
						<div class="border-l-2 border-highlight pl-4">
							<p class="font-medium text-gray-900">
								{#if student.link}
									<a
										href={student.link}
										target="_blank"
										rel="noopener noreferrer"
										class="hover:text-accent transition-colors">{student.name}</a
									>
								{:else}
									{student.name}
								{/if}
							</p>
							<p class="text-sm text-gray-500">{student.background}</p>
							<p class="text-sm text-gray-600 mt-1">{student.focus}</p>
						</div>
					{/each}
				</div>

				<h4 class="font-semibold text-gray-700 mt-6 mb-3 flex items-center gap-2">
					<GraduationCap class="w-4 h-4 text-gray-600" />
					Master's Students
				</h4>
				<div class="space-y-2 border-l-2 border-highlight pl-4">
					{#each mastersStudents as student}
						<p class="text-gray-900">
							{#if student.link}
								<a
									href={student.link}
									target="_blank"
									rel="noopener noreferrer"
									class="hover:text-accent transition-colors">{student.name}</a
								>
							{:else}
								{student.name}
							{/if}
							{#if student.placement}
								<span class="text-sm text-gray-500">({student.placement})</span>
							{/if}
						</p>
					{/each}
				</div>

				<h4 class="font-semibold text-gray-700 mt-6 mb-3 flex items-center gap-2">
					<GraduationCap class="w-4 h-4 text-gray-600" />
					Undergraduate Students
				</h4>
				<div class="space-y-2 border-l-2 border-highlight pl-4">
					{#each undergraduateStudents as student}
						<p class="text-gray-600">
							{#if student.link}
								<a
									href={student.link}
									target="_blank"
									rel="noopener noreferrer"
									class="hover:text-accent transition-colors">{student.name}</a
								>
							{:else}
								{student.name}
							{/if}
						</p>
					{/each}
				</div>
			</div>

			<!-- Dissertations Card -->
			<div class="bg-gray-50 rounded-xl p-6">
				<h3 class="font-semibold text-gray-900">Dissertation Committees</h3>

				<div class="mt-5 space-y-4">
					{#each dissertations as d}
						<div>
							<p class="font-medium text-gray-900">
								{d.name}
								<span class="text-gray-500 font-normal">({d.year})</span>
								{#if d.link}
									<a
										href={d.link}
										target="_blank"
										rel="noopener noreferrer"
										class="ml-1 text-accent hover:text-accent/80"
									>
										<ExternalLink class="w-3.5 h-3.5 inline" />
									</a>
								{/if}
							</p>
							<p class="text-sm text-gray-600 italic">"{d.title}"</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- University Courses -->
	<section class="mt-20">
		<div class="flex items-center gap-3 mb-8">
			<BookOpen class="w-6 h-6 text-highlight" />
			<h2 class="text-2xl font-bold text-gray-900">University Courses</h2>
		</div>

		<div class="grid md:grid-cols-3 gap-6">
			{#each universities as uni}
				<div class="bg-gray-50 rounded-xl p-6">
					<h3 class="font-semibold text-gray-900">{uni.name}</h3>
					<ul class="mt-4 space-y-3">
						{#each uni.courses as course}
							<li class="text-sm">
								{#if typeof course === 'string'}
									<span class="text-gray-600">{course}</span>
								{:else if course.link}
									<a
										href={course.link}
										target={course.link.startsWith('/') ? undefined : '_blank'}
										rel={course.link.startsWith('/') ? undefined : 'noopener noreferrer'}
										class="text-gray-600 hover:text-accent transition-colors underline decoration-gray-300 hover:decoration-accent"
									>
										{course.name}
										{#if 'note' in course && course.note}
											<span class="text-xs text-gray-500 no-underline">({course.note})</span>
										{/if}
										<ExternalLink class="w-3 h-3 inline ml-1" />
									</a>
								{:else}
									<span class="text-gray-600">{course.name}</span>
								{/if}
							</li>
						{/each}
					</ul>
					{#if 'note' in uni && uni.note}
						<p class="mt-4 text-xs text-gray-500 italic">*{uni.note}</p>
					{/if}
				</div>
			{/each}
		</div>
	</section>
</div>
