/**
 * MLD Resource - Shared Navigation
 * Builds sidebar, breadcrumbs, handles mobile menu, highlights current page.
 */
(function() {
  'use strict';

  // ===== SITE STRUCTURE =====
  var SITE = [
    {
      folder: 'basics', title: 'Understanding MLD', pages: [
        { file: 'basics/index.html', title: 'What is MLD?', k: 'metachromatic leukodystrophy definition overview rare disease lysosomal storage myelin white matter nerve enzyme ARSA arylsulfatase sulfatide demyelination' },
        { file: 'basics/types.html', title: 'Types of MLD', k: 'late infantile juvenile adult onset age progression timeline prognosis types forms classification early late' },
        { file: 'basics/genetics.html', title: 'Genetics & Inheritance', k: 'ARSA gene chromosome 22 autosomal recessive carrier inheritance mutation variant allele PSAP saposin genetic testing family planning' },
        { file: 'basics/diagnosis.html', title: 'Diagnosis & Testing', k: 'diagnosis enzyme activity urine sulfatide MRI nerve conduction genetic testing newborn screening RUSP pseudodeficiency dried blood spot prenatal' }
      ]
    },
    {
      folder: 'treatment', title: 'Treatment', pages: [
        { file: 'treatment/index.html', title: 'Treatment Overview', k: 'treatment options gene therapy transplant timing window pre-symptomatic early intervention urgency outcomes hope' },
        { file: 'treatment/gene-therapy.html', title: 'Lenmeldy Gene Therapy', k: 'Lenmeldy Libmeldy atidarsagene autotemcel Orchard Therapeutics gene therapy lentiviral vector FDA approved ARSA enzyme one-time cure outcomes' },
        { file: 'treatment/treatment-process.html', title: 'The Treatment Journey', k: 'treatment process steps stem cell collection apheresis conditioning chemotherapy busulfan infusion engraftment monitoring hospital timeline' },
        { file: 'treatment/treatment-centers.html', title: 'Qualified Treatment Centers', k: 'treatment centers hospitals Minnesota CHOA Atlanta CHOP Philadelphia Texas Children Houston UCSF San Francisco qualified' },
        { file: 'treatment/stem-cell-transplant.html', title: 'Stem Cell Transplant', k: 'HSCT bone marrow transplant hematopoietic stem cell allogeneic donor graft engraftment outcomes risks alternative' },
        { file: 'treatment/clinical-trials.html', title: 'Clinical Trials', k: 'clinical trials research ClinicalTrials.gov NCT experimental therapy intrathecal ERT substrate reduction enrollment eligibility' },
        { file: 'treatment/emerging-research.html', title: 'Emerging Research', k: 'emerging research future therapy CHOP EA1 vector improved gene therapy encapsulated cell substrate reduction next generation pipeline' }
      ]
    },
    {
      folder: 'care', title: 'Daily Care', pages: [
        { file: 'care/index.html', title: 'Care Team Overview', k: 'care team multidisciplinary specialist neurologist geneticist therapist coordinator management comprehensive approach' },
        { file: 'care/monitoring.html', title: 'Monitoring Schedule', k: 'monitoring MRI brain nerve conduction study developmental assessment gallbladder ultrasound bone density DEXA scoliosis hip screening timeline schedule' },
        { file: 'care/physical-therapy.html', title: 'Therapy & Mobility', k: 'physical therapy occupational therapy speech therapy mobility equipment wheelchair stander walker orthotics braces contracture prevention adaptive' },
        { file: 'care/feeding-nutrition.html', title: 'Feeding & Nutrition', k: 'feeding swallowing dysphagia gastrostomy G-tube nutrition weight aspiration pneumonia constipation reflux' },
        { file: 'care/seizures-pain.html', title: 'Seizures & Pain Management', k: 'seizures epilepsy anti-epileptic medication neuropathic pain spasticity baclofen comfort temperature dysregulation' },
        { file: 'care/palliative-care.html', title: 'Palliative & Supportive Care', k: 'palliative care quality of life comfort dignity goals of care hospice advance directive respiratory support' }
      ]
    },
    {
      folder: 'family', title: 'Family Support', pages: [
        { file: 'family/index.html', title: 'Newly Diagnosed: Start Here', k: 'newly diagnosed what to do first steps urgent action plan checklist call today immediate next steps' },
        { file: 'family/action-plan.html', title: 'Newly Diagnosed Action Plan', k: 'action plan checklist phone numbers Orchard Assist MLD Foundation Cure MLD financial help travel grants emotional support Global Genes NMDP Ronald McDonald House FMLA NORD Patient Advocate insurance' },
        { file: 'family/siblings.html', title: 'Siblings & Family Testing', k: 'siblings brothers sisters carrier testing genetic screening family 25 percent risk affected unaffected' },
        { file: 'family/genetic-counseling.html', title: 'Genetic Counseling', k: 'genetic counseling family planning prenatal testing preimplantation PGT IVF amniocentesis carrier screening future pregnancies' },
        { file: 'family/emotional-support.html', title: 'Emotional & Mental Health', k: 'emotional support mental health grief coping stress anxiety caregiver burnout counseling therapy self-care marriage sibling adjustment' },
        { file: 'family/daily-life.html', title: 'Daily Life & Practical Tips', k: 'daily life practical tips home modifications equipment insurance school IEP early intervention services respite care' },
        { file: 'family/print-guide.html', title: 'Printable Guide', k: 'printable guide one pager fridge first steps phone numbers treatment centers financial help print diagnosis' }
      ]
    },
    {
      folder: 'financial', title: 'Financial Resources', pages: [
        { file: 'financial/index.html', title: 'Understanding the Costs', k: 'cost expensive Lenmeldy 4.25 million financial burden treatment hospital insurance coverage' },
        { file: 'financial/insurance-access.html', title: 'Insurance & Access Programs', k: 'insurance coverage Orchard Assist prior authorization benefits investigation copay assistance manufacturer support patient access' },
        { file: 'financial/government-programs.html', title: 'Government Programs', k: 'Medicaid SSI Social Security disability government benefits state waiver TEFRA Katie Beckett early intervention' },
        { file: 'financial/grants-assistance.html', title: 'Grants & Charitable Assistance', k: 'grants financial assistance charity nonprofit Cure MLD travel grants emergency grants foundation help fundraising' }
      ]
    },
    {
      folder: 'research', title: 'Science & Research', pages: [
        { file: 'research/index.html', title: 'The Research Landscape', k: 'research overview pipeline gene therapy next generation emerging science AI drug discovery unmet needs timeline clinical trials preclinical' },
        { file: 'research/next-gen-gene-therapy.html', title: 'Next-Gen Gene Therapy', k: 'CHOP EA1 vector AAV GMU01 Sanofi AAV-PHP.eB Paris Brain Institute lentiviral cisterna magna IV injection next generation improved ARSA cross-correction' },
        { file: 'research/emerging-science.html', title: 'Emerging Science', k: 'substrate reduction therapy S202 CGT alpha-synuclein biomarkers NfL neurofilament NAA MRI remyelination oligodendrocyte peripheral neuropathy newborn screening RUSP' },
        { file: 'research/ai-drug-development.html', title: 'AI & Drug Development', k: 'artificial intelligence AI machine learning drug discovery repurposing NEUBOrg enzyme engineering AlphaFold blood brain barrier digital twin rare disease orphan drug' }
      ]
    },
    {
      folder: 'resources', title: 'Resources', pages: [
        { file: 'resources/index.html', title: 'Organizations & Support', k: 'organizations MLD Foundation Cure MLD United Leukodystrophy Foundation Hunter Hope NORD support groups family network ambassador' },
        { file: 'resources/newborn-screening.html', title: 'Newborn Screening', k: 'newborn screening RUSP recommended uniform screening panel state New York Illinois Maryland Minnesota Pennsylvania Utah dried blood spot' },
        { file: 'resources/glossary.html', title: 'Glossary of Terms', k: 'glossary terms definitions medical vocabulary ARSA sulfatide myelin leukodystrophy lysosomal enzyme demyelination autosomal recessive' },
        { file: 'resources/references.html', title: 'References & Further Reading', k: 'references sources citations NIH NORD GeneReviews medical literature research papers guidelines consensus' }
      ]
    }
  ];

  // ===== RESOLVE ROOT =====
  var path = window.location.pathname;
  var isRoot = /\/(index\.html)?$/.test(path) && !/\/(basics|treatment|care|family|financial|research|resources)\//.test(path);
  var ROOT = isRoot ? './' : '../';

  // ===== BUILD SIDEBAR =====
  var sidebar = document.getElementById('sidebar');
  if (sidebar) {
    var html = '<a href="' + ROOT + '" style="padding:12px 20px;font-weight:700;font-size:0.95rem;color:var(--sky-700);border-left:none;margin-bottom:8px;display:block;">Home</a>';
    SITE.forEach(function(section) {
      var isInFolder = path.indexOf('/' + section.folder + '/') !== -1;
      html += '<div class="sidebar-folder' + (isInFolder ? '' : ' collapsed') + '">';
      html += '<div class="sidebar-folder-header" tabindex="0" role="button" aria-expanded="' + (isInFolder ? 'true' : 'false') + '"><span class="folder-arrow">&#9660;</span>' + section.title + '</div>';
      html += '<div class="sidebar-folder-pages">';
      section.pages.forEach(function(p) {
        var href = ROOT + p.file;
        var active = path.indexOf(p.file) !== -1 ? ' active' : '';
        html += '<a href="' + href + '" class="' + active + '">' + p.title + '</a>';
      });
      html += '</div></div>';
    });
    sidebar.innerHTML = html;

    // Folder toggle (click + keyboard)
    sidebar.querySelectorAll('.sidebar-folder-header').forEach(function(hdr) {
      function toggle() {
        var folder = hdr.parentElement;
        folder.classList.toggle('collapsed');
        hdr.setAttribute('aria-expanded', !folder.classList.contains('collapsed'));
      }
      hdr.addEventListener('click', toggle);
      hdr.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });
    });
  }

  // ===== BREADCRUMB =====
  var bc = document.getElementById('breadcrumb');
  if (bc && !isRoot) {
    var crumbs = '<a href="' + ROOT + '">Home</a>';
    SITE.forEach(function(section) {
      section.pages.forEach(function(p, i) {
        if (path.indexOf(p.file) !== -1) {
          crumbs += '<span class="sep">/</span>';
          if (i > 0) {
            crumbs += '<a href="' + ROOT + section.pages[0].file + '">' + section.title + '</a>';
            crumbs += '<span class="sep">/</span>';
          }
          crumbs += p.title;
        }
      });
    });
    bc.innerHTML = crumbs;
  }

  // ===== MOBILE MENU =====
  var hamburger = document.getElementById('hamburgerBtn');
  var overlay = document.getElementById('sidebarOverlay');
  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('active');
  }
  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
  }
  if (hamburger) hamburger.addEventListener('click', function() {
    sidebar && sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
  if (overlay) overlay.addEventListener('click', closeSidebar);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
      closeSidebar();
      if (hamburger) hamburger.focus();
    }
  });

  // ===== BACK TO TOP =====
  var btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', function() {
      btt.classList.toggle('visible', window.scrollY > 400);
    });
    btt.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  // ===== SEARCH (index page: cross-site / inner pages: in-page) =====
  var searchInput = document.getElementById('searchInput');
  var searchCount = document.getElementById('searchCount');

  if (searchInput && isRoot) {
    // Cross-site search with dropdown
    var dropdown;
    var ddOverlay;
    function ensureDropdown() {
      if (dropdown) return;
      dropdown = document.createElement('div');
      dropdown.className = 'search-dropdown';
      dropdown.style.cssText = 'position:absolute;top:100%;left:0;right:0;background:white;border:1px solid var(--warm-200);border-radius:12px;max-height:60vh;overflow-y:auto;z-index:1001;display:none;box-shadow:0 8px 30px rgba(0,0,0,0.1);margin-top:4px;';
      searchInput.parentElement.appendChild(dropdown);
      ddOverlay = document.createElement('div');
      ddOverlay.className = 'search-dropdown-overlay';
      document.body.appendChild(ddOverlay);
      ddOverlay.addEventListener('click', function() { closeDropdown(); });
    }
    function closeDropdown() {
      if (dropdown) dropdown.style.display = 'none';
      if (ddOverlay) ddOverlay.classList.remove('active');
    }

    var debounceTimer;
    searchInput.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      var q = searchInput.value.trim().toLowerCase();
      if (q.length < 2) { closeDropdown(); if(searchCount) searchCount.textContent=''; return; }
      debounceTimer = setTimeout(function() {
        ensureDropdown();
        var results = [];
        SITE.forEach(function(section) {
          section.pages.forEach(function(p) {
            var haystack = (p.title + ' ' + p.k + ' ' + section.title).toLowerCase();
            var terms = q.split(/\s+/);
            var matched = terms.every(function(t) { return haystack.indexOf(t) !== -1; });
            if (matched) {
              var score = 0;
              terms.forEach(function(t) {
                if (p.title.toLowerCase().indexOf(t) !== -1) score += 10;
                if (p.k.toLowerCase().indexOf(t) !== -1) score += 5;
              });
              results.push({ page: p, section: section, score: score });
            }
          });
        });
        results.sort(function(a,b) { return b.score - a.score; });
        if (results.length === 0) {
          dropdown.innerHTML = '<div style="padding:16px;color:var(--warm-400);font-size:0.9rem;">No results found</div>';
        } else {
          dropdown.innerHTML = results.map(function(r) {
            return '<a href="' + ROOT + r.page.file + '" style="display:block;padding:12px 16px;border-bottom:1px solid var(--warm-100);text-decoration:none;color:var(--warm-700);font-size:0.9rem;transition:background 0.2s;"><strong style="color:var(--sky-700);">' + r.page.title + '</strong><br><span style="font-size:0.8rem;color:var(--warm-400);">' + r.section.title + '</span></a>';
          }).join('');
        }
        dropdown.style.display = 'block';
        if (ddOverlay) ddOverlay.classList.add('active');
        if (searchCount) searchCount.textContent = results.length + ' result' + (results.length !== 1 ? 's' : '');
      }, 200);
    });

    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { closeDropdown(); searchInput.value = ''; if(searchCount) searchCount.textContent=''; }
    });

  } else if (searchInput && !isRoot) {
    // In-page section search
    searchInput.addEventListener('input', function() {
      var q = searchInput.value.trim().toLowerCase();
      var sections = document.querySelectorAll('.doc-section');
      if (!sections.length) { return; }
      var visible = 0;
      sections.forEach(function(sec) {
        if (!q) {
          sec.classList.remove('search-hidden');
          visible++;
          return;
        }
        var text = sec.textContent.toLowerCase();
        if (text.indexOf(q) !== -1) {
          sec.classList.remove('search-hidden');
          visible++;
        } else {
          sec.classList.add('search-hidden');
        }
      });
      if (searchCount) searchCount.textContent = q ? visible + ' section' + (visible !== 1 ? 's' : '') : '';
    });
  }

  // ===== COLLAPSIBLE SECTIONS =====
  document.querySelectorAll('.section-header').forEach(function(hdr) {
    hdr.setAttribute('tabindex', '0');
    hdr.setAttribute('role', 'button');
    hdr.setAttribute('aria-expanded', 'true');
    function toggleSection() {
      var section = hdr.parentElement;
      section.classList.toggle('collapsed');
      hdr.setAttribute('aria-expanded', !section.classList.contains('collapsed'));
    }
    hdr.addEventListener('click', toggleSection);
    hdr.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSection(); }
    });
  });

})();
