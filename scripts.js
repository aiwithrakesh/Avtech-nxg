const n = (title, url = '', children = []) => ({ title, url, children });

const productMenuTree = n('Products', '', [
    n('JL AUDIO', '', [
        n('Subwoofers', '', [
            n('Gotham v2', '/products/JL_AUDIO/Subwoofers/Gothamv2/gothamv2.aspx', [
                n('Gotham g213v2', '/products/JL_AUDIO/Subwoofers/Gothamv2/Gothamv2_g213/details.aspx')
            ]),
            n('Fathom V2', '/products/powered_subwoofers/jl_audio/fathomv2.aspx', [
                n('Fathom f110v2', '/products/powered_subwoofers/jl_audio/fathomv2_f110/details.aspx'),
                n('Fathom f112v2', '/products/powered_subwoofers/jl_audio/fathomv2_f112/details.aspx'),
                n('Fathom f113v2', '/products/powered_subwoofers/jl_audio/fathomv2_f113/details.aspx'),
                n('Fathom f212v2', '/products/powered_subwoofers/jl_audio/fathomv2_f212/details.aspx')
            ]),
            n('E-Sub', '/products/powered_subwoofers/jl_audio/e-sub.aspx', [
                n('e110', '/products/powered_subwoofers/jl_audio/e-sub_e110/details.aspx'),
                n('e112', '/products/powered_subwoofers/jl_audio/e-sub_e112/details.aspx')
            ]),
            n('Dominion', '', [
                n('Dominion d108', '/products/powered_subwoofers/jl_audio/dominion_d108/details.aspx'),
                n('Dominion d110', '/products/powered_subwoofers/jl_audio/dominion_d110/details.aspx')
            ])
            
        ]),
        n('In-Wall Subwoofers', '', [
            n('Fathom IWSv2', '/products/JL_AUDIO/InWallSubwoofers/FathomIWSv2/FathomIWSv2.aspx', [
                n('Fathom IWSv2-SYS-113', '/products/JL_AUDIO/InWallSubwoofers/FathomIWSv2/SYS113/details.aspx'),
                n('Fathom IWSv2-SYS-213', '/products/JL_AUDIO/InWallSubwoofers/FathomIWSv2/SYS213/details.aspx')
            ]),
            n('Fathom IWS', '', [
                n('Fathom IWS-SYS-108', '/products/JL_AUDIO/InWallSubwoofers/FathomIWS/SYS108/details.aspx'),
                n('Fathom IWS-SYS-208', '/products/JL_AUDIO/InWallSubwoofers/FathomIWS/SYS208/details.aspx')
            ])
        ]),
        n('In-Ceiling Subwoofers', '', [
            n('Fathom ICS', '', [
                n('Fathom ICS-SYS-108', '/products/JL_AUDIO/InCeilingSubwoofers/FathomICS/ICSSYS108/details.aspx'),
                n('Fathom ICS-SYS-208', '/products/JL_AUDIO/InCeilingSubwoofers/FathomICS/ICSSYS208/details.aspx')
            ])
        ]),
        n('Electronics', '', [
            n('Subwoofer Crossovers', '', [
                n('CR-1', '/products/electronics/cr-1/details.aspx')
            ]),
            n('JLINK', '', [
                n('JLINK TRX', '/products/electronics/jlink_trx/details.aspx'),
                n('JLINK RX', '/products/electronics/jlink_rx/details.aspx')
            ])
        ]),
        n('Discontinued', '', [
                n('Fathom', '/products/powered_subwoofers/jl_audio/fathom.aspx', [
                    n('Fathom f110', '/products/powered_subwoofers/jl_audio/fathom_f110/details.aspx'),
                    n('Fathom f112', '/products/powered_subwoofers/jl_audio/fathom_f112/details.aspx'),
                    n('Fathom f113', '/products/powered_subwoofers/jl_audio/fathom_f113/details.aspx'),
                    n('Fathom f212', '/products/powered_subwoofers/jl_audio/fathom_f212/details.aspx')
                ]),
                n('Gotham', '/products/powered_subwoofers/jl_audio/gotham.aspx', [
                    n('Gotham g213', '/products/powered_subwoofers/jl_audio/gotham_g213_details.aspx')
                ])
            ])
    ]),
    n('EMM LABS', '', [
        n('D/A Converters and Transports', '', [
            n('DV2i Integrated D/A Converter', '/products/EMM_LABS/DAConverters/DV2iIntegratedConverter/details.aspx'),
            n('DA2i Stereo D/A Converter', '/products/EMM_LABS/DAConverters/DA2iStereoConverter/details.aspx')
        ]),
        n('Network Streaming Bridge', '', [
            n('NS1 Streamer', '/products/EMM_LABS/NSB/NS1Streamer/details.aspx')
        ]),
        n('Amplifiers and Preamplifiers', '', [
            n('PRE Stereo Preamplifier', '/products/EMM_LABS/AP/PREStereoPreamplifier/details.aspx'),
            n('MTRX2 V2 1KW Mono Amplifiers', '/products/EMM_LABS/AP/MTRX2V2/details.aspx'),
            n('MTRS Stereo Power Amplifier', '/products/EMM_LABS/AP/MTRS/details.aspx')
        ]),
        n('Optical Equalisers', '', [
            n('DS-EQ1 Optical Equaliser', '/products/EMM_LABS/OE/DS-EQ1/details.aspx')
        ]),
        n('Discontinued', '', [
            n('D/A Converters and Transports', '', [
                n('DV2 Integrated Converter', '/products/EMM_LABS/Discontinued/DV2IntegratedConverter/details.aspx'),
                n('DA2 V2 Stereo D/A Converter', '/products/EMM_LABS/Discontinued/DA2StereoConverter/details.aspx'),
                n('DAC2X V2 D/A Converter', '/products/EMM_LABS/Discontinued/DAC2XV2Converter/details.aspx')
            ]),
            n('Amplifiers and Preamplifiers', '', [
                n('PRE2 Preamplifier', '/products/EMM_LABS/Discontinued/PRE2Preamplifier/details.aspx'),
                n('MTRX Reference Mono Amplifiers', '/products/EMM_LABS/Discontinued/MTRX/details.aspx'),
                n('MTRX2 Mono Amplifiers', '/products/EMM_LABS/Discontinued/MTRX2/details.aspx')
            ])
        ])
    ]),
    n('MEITNER AUDIO', '', [
        n('D/A Converters and Transports', '', [
            n('MA-1 V2 Stereo D/A Converter', '/products/MEITNER_AUDIO/DAConverters/MA1StereoConverter/details.aspx'),
            n('MA3 Integrated D/A Converter', '/products/MEITNER_AUDIO/DAConverters/MA3IntegratedConverter/details.aspx')
        ]),
        n('Pre-Amplifier', '', [
            n('Meitner PRE Stereo Preamplifier', '/products/MEITNER_AUDIO/PreAmplifier/PreStereo/details.aspx')
        ]),
        n('Optical Equalisers', '', [
            n('DS-EQ2 Optical Equaliser', '/products/MEITNER_AUDIO/OE/DS-EQ2/details.aspx')
        ])
    ]),
    n('ATI Amplifiers', '', [
        n('Signature Amplifiers', '', [
            n('AT6000', '/products/ATI_Amplifiers/SignatureAmplifiers/AT6000/details.aspx'),
            n('AT4000', '/products/ATI_Amplifiers/SignatureAmplifiers/AT4000/details.aspx')
        ]),
        n('Pure Balance Amplifiers', '', [
            n('AT3300', '/products/ATI_Amplifiers/PureBalanceAmplifiers/AT3300/details.aspx')
        ]),
        n('Class D Amplifiers', '', [
            n('AT542NC to AT544NC', '/products/ATI_Amplifiers/ClassDAmplifiers/AT54XNC/details.aspx'),
            n('AT522NC to AT528NC', '/products/ATI_Amplifiers/ClassDAmplifiers/AT52XNC/details.aspx')
        ]),
        n('Multi Channel Amplifiers', '', [
            n('AT1820', '/products/ATI_Amplifiers/MultiChannelAmplifiers/AT1820/details.aspx')
        ]),
        n('Stereo Amplifiers', '', [
            n('AT6002', '/products/ATI_Amplifiers/StereoAmplifiers/AT6002/details.aspx'),
            n('AT4002', '/products/ATI_Amplifiers/StereoAmplifiers/AT4002/details.aspx'),
            n('AT3302', '/products/ATI_Amplifiers/StereoAmplifiers/AT3302/details.aspx'),
            n('AT542NC', '/products/ATI_Amplifiers/StereoAmplifiers/AT54XNC/details.aspx'),
            n('AT522NC', '/products/ATI_Amplifiers/StereoAmplifiers/AT52XNC/details.aspx'),
            n('AT1822', '/products/ATI_Amplifiers/StereoAmplifiers/AT1822/details.aspx')
        ]),
        n('Distribution Amplifiers', '', [
            n('AT7016', '/products/ATI_Amplifiers/DistributionAmplifiers/AT7016/details.aspx'),
            n('AT7012', '/products/ATI_Amplifiers/DistributionAmplifiers/AT7012/details.aspx')
        ]),
        n('Discontinued', '', [
            n('Multi Channel Amplifiers', '', [
                n('AT1800', '/products/ATI_Amplifiers/MultiChannelAmplifiers/AT1800/details.aspx')
            ]),
            n('Stereo Amplifiers', '', [
                n('AT1802', '/products/ATI_Amplifiers/StereoAmplifiers/AT1802/details.aspx')
            ]),
            n('Distribution Amplifiers', '', [
                n('AT6012', '/products/ATI_Amplifiers/DistributionAmplifiers/AT6012/details.aspx')
            ])
        ])
    ]),
    n('RBH SOUND', '', [
        n('Bookshelf Speakers', '', [
            n('SIGNATURE SV REFERENCE SERIES SV-61R', '/products/RBH_SOUND/BS/SV-61R/details.aspx'),
            n('SIGNATURE SV REFERENCE SERIES SV-661R', '/products/RBH_SOUND/BS/SV-661R/details.aspx')
        ]),
        n('Center Channel Speakers', '', [
            n('SIGNATURE SV REFERENCE SERIES SV-661CR', '/products/RBH_SOUND/CCS/SV-661CR/details.aspx')
        ]),
        n('On-Wall Speakers', '', [
            n('SIGNATURE SV SERIES SV-661W', '/products/RBH_SOUND/OWS/SV-661W/details.aspx'),
            n('SIGNATURE SV REFERENCE SERIES SV-661WR', '/products/RBH_SOUND/OWS/SV-661WR/details.aspx')
        ]),
        n('In-Wall Speakers', '', [
            n('SIGNATURE REFERENCE SERIES SI-760/R', '/products/RBH_SOUND/IWS/SI-760R/details.aspx')
        ]),
        n('In-Ceiling Speakers', '', [
            n('VISAGE SERIES VA-615', '/products/RBH_SOUND/ICS/VA-615/details.aspx'),
            n('VISAGE SERIES VA-615DS 2-WAY DUAL CHANNEL', '/products/RBH_SOUND/ICS/VA-615DS/details.aspx'),
            n('SIGNATURE SI-615', '/products/RBH_SOUND/ICS/SI-615/details.aspx')
        ])
    ]),
    n('WELLFLOAT', '', [
        n('Hifi Rack', '', [
            n('Pegasus Hifi Rack', '/products/WELLFLOAT/HR/PHR/details.aspx'),
            n('Pegasus II Hifi Rack', '/products/WELLFLOAT/HR/P2HR/details.aspx')
        ]),
        n('Babel', '/products/WELLFLOAT/Babel/details.aspx'),
        n('Double', '/products/WELLFLOAT/Double/details.aspx'),
        n('Delta Isolation Base', '', [
            n('Delta Extreme', '', [
                n('Normal (No Hole)', '/products/WELLFLOAT/DIS/Extreme-NH/details.aspx'),
                n('With Spike Hole', '/products/WELLFLOAT/DIS/Extreme/details.aspx')
            ]),
            n('Delta Isolation Base', '', [
                n('Standard (5mm Ring with Spike Hole)', '/products/WELLFLOAT/DIS/Standard/details.aspx'),
                n('Centre Pillar 20mm (With Spike Hole)', '/products/WELLFLOAT/DIS/20mm/details.aspx'),
                n('Centre Pillar 28mm (No Spike Hole)', '/products/WELLFLOAT/DIS/28mm/details.aspx')
            ])
        ]),
        n('Isolation Platforms', '', [
            n('Special Coating Models', '', [
                n('Model 4449L', '/products/WELLFLOAT/BOARD–SCM/4449L/details.aspx'),
                n('Model 3545L', '/products/WELLFLOAT/BOARD–SCM/3545L/details.aspx')
            ]),
            n('Slim Models', '', [
                n('Model 4548S (SF)', '/products/WELLFLOAT/BOARD–SM/4548S/details.aspx'),
                n('Model 3545S (SF)', '/products/WELLFLOAT/BOARD–SM/3545S/details.aspx')
            ]),
            n('Classic / Regular Series', '', [
                n('4050 (TYPE 10F)', '/products/WELLFLOAT/CS/4050/details.aspx'),
                n('4060 (TYPE 30F)', '/products/WELLFLOAT/CS/4060/details.aspx')
            ]),
            n('Classic / Regular PRO Series', '', [
                n('2540 (PRO) - Pair', '/products/WELLFLOAT/Classic-PRO/2540/details.aspx'),
                n('3040 (PRO II) - Pair', '/products/WELLFLOAT/Classic-PRO/3040/details.aspx')
            ]),
            n('B Series', '', [
                n('Finnish Birch Board', '/products/WELLFLOAT/BSFBB/details.aspx')
            ]),
            n('Basic Models', '', [
                n('Classic 2130 (TYPE A4)', '/products/WELLFLOAT/A4Series/2130/details.aspx'),
                n('Classic 2130G (TYPE A4-G)', '/products/WELLFLOAT/A4Series/2130G/details.aspx'),
                n('Classic 2130F (TYPE A4-F)', '/products/WELLFLOAT/A4Series/2130F/details.aspx')
            ]),
            n('TYPE I', '', [
                n('Type One', '/products/WELLFLOAT/TypeOne/details.aspx')
            ])
        ]),
        n('Accessories', '', [
            n('Welldisc (WELLFLOAT plates)', '/products/WELLFLOAT/Welldisc/details.aspx')
        ])
    ]),
    n('AUDIO HUNGARY', '', [
        n('Integrated Amplifier', '', [
            n('Qualiton A35', '/products/AUDIO_HUNGARY/IntegratedAmplifier/QualitonA35/details.aspx'),
            n('Qualiton A75', '/products/AUDIO_HUNGARY/IntegratedAmplifier/QualitonA75/details.aspx'),
            n('Qualiton X200', '/products/AUDIO_HUNGARY/IntegratedAmplifier/QualitonX200/details.aspx'),
            n('Qualiton 300B', '/products/AUDIO_HUNGARY/IntegratedAmplifier/Qualiton300B/details.aspx')
        ]),
        n('Pre-Amplifier', '', [
            n('Qualiton C200', '/products/AUDIO_HUNGARY/Pre-Amplifier/QualitonC200/details.aspx')
        ]),
        n('Power Amplifier', '', [
            n('Qualiton P200', '/products/AUDIO_HUNGARY/PowerAmplifier/QualitonP200/details.aspx')
        ]),
        n('Phono Pre-Amplifier', '', [
            n('Qualiton Phono', '/products/AUDIO_HUNGARY/PhonoPre-Amplifier/QualitonPhono/details.aspx')
        ]),
        n('MC Transformer', '', [
            n('Qualiton MC Transformer', '/products/AUDIO_HUNGARY/MCTransformer/QualitonMCTransformer/details.aspx')
        ]),
        n('Discontinued', '', [
            n('Qualiton Phono', '/products/AUDIO_HUNGARY/Discontinued/QualitonPhono/details.aspx'),
            n('Qualiton A20i - Class A', '/products/AUDIO_HUNGARY/Discontinued/QualitonA20i/details.aspx'),
            n('Qualiton A50i - Class A', '/products/AUDIO_HUNGARY/Discontinued/QualitonA50i/details.aspx')
        ])
    ]),
    n('EAHIBRID', '', [
        n('Battery Linear Power Supply', '', [
            n('PureDC-B1', '/products/EAHIBRID/BLPS/PureDC-B1/details.aspx')
        ])
    ]),
    n('SCHNERZINGER', 'https://www.schnerzinger.com/english/'),
    n('ZELLATON', 'https://www.zellaton.de/en/'),
    n('NUPRIME AUDIO', 'https://nuprimeaudio.com/'),
    n('NUPRIME-X', 'https://nuprime-x.com/'),
    n('AGS (ACOUSTIC GROVE SYSTEM)', 'https://www.noe.co.jp/business/architectural-acoustics/own-products/ags/')
]);

function safeQuery(selector) {
    return document.querySelector(selector);
}

function getNodeChildren(node) {
    return Array.isArray(node?.children) ? node.children : [];
}

function isExternalUrl(url) {
    return /^https?:\/\//i.test(url || '');
}

function normalizeMenuText(value) {
    return String(value || '')
        .replace(/â€“/g, '–')
        .replace(/â€”/g, '—')
        .replace(/â€™/g, '’')
        .replace(/â€œ/g, '“')
        .replace(/â€/g, '”')
        .replace(/Â/g, '')
        .trim();
}

function escapeHtml(value) {
    return normalizeMenuText(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function resolveNodeHref(node, isLeaf = false) {
    if (!node?.url) {
        return isLeaf ? 'product-detail.html' : 'products.html';
    }

    if (isExternalUrl(node.url)) {
        return node.url;
    }

    return isLeaf
        ? `product-detail.html?title=${encodeURIComponent(node.title)}&legacy=${encodeURIComponent(node.url)}`
        : `products.html?title=${encodeURIComponent(node.title)}&legacy=${encodeURIComponent(node.url)}`;
}

function getNodeTarget(node) {
    return isExternalUrl(node?.url) ? '_blank' : '_self';
}

function getNodeSummary(node) {
    if (isExternalUrl(node?.url)) {
        return 'Opens the official brand website in a new tab.';
    }

    return '';
}

function isDiscontinuedNode(node) {
    return /discontinued/i.test(node?.title || '');
}

function withDiscontinuedBadge(title, discontinued) {
    return discontinued
        ? `${escapeHtml(title)} <span class="mega-menu-badge-discontinued">Discontinued</span>`
        : escapeHtml(title);
}

function getLeafNodes(node) {
    const children = getNodeChildren(node);
    if (!children.length) {
        return [node];
    }

    return children.flatMap(child => getLeafNodes(child));
}

function renderLeafLink(node, discontinued = false) {
    const href = resolveNodeHref(node, true);
    const target = getNodeTarget(node);
    const title = escapeHtml(node.title);
    return `<li><a href="${href}" target="${target}" rel="${target === '_blank' ? 'noreferrer noopener' : ''}">${title}</a></li>`;
}

function renderGroupedNodeCard(node, inheritedDiscontinued = false) {
    const children = getNodeChildren(node);
    const isDiscontinued = inheritedDiscontinued || isDiscontinuedNode(node);
    const groupClass = isDiscontinued ? ' mega-menu-product-group-discontinued' : '';

    if (!children.length) {
        const summary = getNodeSummary(node);
        return `
            <li class="mega-menu-product-item">
                <a href="${resolveNodeHref(node, true)}" target="${getNodeTarget(node)}" rel="${getNodeTarget(node) === '_blank' ? 'noreferrer noopener' : ''}" class="mega-menu-product-link${groupClass}">
                    <span class="mega-menu-product-name">${escapeHtml(node.title)}</span>
                    ${summary ? `<span class="mega-menu-product-description">${escapeHtml(summary)}</span>` : ''}
                </a>
            </li>
        `;
    }

    const leafNodes = getLeafNodes(node);

    return `
        <li class="mega-menu-product-group${groupClass}">
            <div class="mega-menu-product-group-title">${withDiscontinuedBadge(node.title, isDiscontinued)}</div>
            <ul class="mega-menu-product-children mega-menu-product-children-deep">
                ${leafNodes.map(leaf => renderLeafLink(leaf, isDiscontinued)).join('')}
            </ul>
        </li>
    `;
}

function initDesktopMenu() {
    const productsBtn = safeQuery('#productsBtn');
    const productsMenu = safeQuery('#productsMenu');
    const brandList = safeQuery('#brandList');
    const categoryList = safeQuery('#categoryList');
    const productList = safeQuery('#productList');
    const menuWrapper = productsBtn?.parentElement;
    const nav = productsBtn?.closest('nav');
    if (!productsBtn || !productsMenu || !brandList || !categoryList || !productList) {
        return;
    }
    brandList.className = 'mega-menu-list mega-menu-brand-list';
    categoryList.className = 'mega-menu-list mega-menu-category-list';
    productList.className = 'mega-menu-list mega-menu-product-list';

    brandList.innerHTML = '';
    categoryList.innerHTML = '';
    productList.innerHTML = '';

    const renderProducts = (categoryNode) => {
        productList.innerHTML = '';
        const isDiscontinued = isDiscontinuedNode(categoryNode);
        productList.classList.toggle('is-discontinued-context', isDiscontinued);

        const items = getNodeChildren(categoryNode).length ? getNodeChildren(categoryNode) : [categoryNode];
        productList.classList.toggle('mega-menu-product-list-compact', items.length >= 6);
        productList.innerHTML = items.map(node => renderGroupedNodeCard(node, isDiscontinued)).join('');
    };

    const renderCategories = (brand) => {
        categoryList.innerHTML = '';
        productList.innerHTML = '';

        const categories = getNodeChildren(brand);

        if (!categories.length) {
            const categoryItem = document.createElement('li');
            categoryItem.className = 'category-item active';
            categoryItem.textContent = isExternalUrl(brand.url) ? 'Opens Official Website' : 'All Products';
            categoryList.appendChild(categoryItem);
            renderProducts(brand);
            return;
        }

        categories.forEach((cat, index) => {
            const catItem = document.createElement('li');
            catItem.className = 'category-item';
            catItem.textContent = cat.title;
            if (isDiscontinuedNode(cat)) {
                catItem.classList.add('category-item-discontinued');
            }

            if (index === 0) {
                catItem.classList.add('active');
            }

            catItem.addEventListener('click', () => {
                categoryList.querySelectorAll('.category-item').forEach(el => el.classList.remove('active'));
                catItem.classList.add('active');
                renderProducts(cat);
            });

            categoryList.appendChild(catItem);
        });

        if (categories.length) {
            renderProducts(categories[0]);
        }
    };

    productMenuTree.children.forEach((brand, index) => {
        const brandItem = document.createElement('li');
        brandItem.className = 'brand-item';
        brandItem.textContent = normalizeMenuText(brand.title);
        brandItem.dataset.brandId = brand.title;
        const isExternalBrand = isExternalUrl(brand.url) && !getNodeChildren(brand).length;

        if (index === 0) {
            brandItem.classList.add('active');
        }

        brandItem.addEventListener('click', () => {
            if (isExternalBrand) {
                closeMegaMenu();
                window.open(brand.url, '_blank', 'noopener,noreferrer');
                return;
            }

            brandList.querySelectorAll('.brand-item').forEach(el => el.classList.remove('active'));
            brandItem.classList.add('active');
            renderCategories(brand);
        });

        if (isExternalBrand) {
            brandItem.classList.add('brand-item-external');
        }

        brandList.appendChild(brandItem);
    });

    if (productMenuTree.children.length) {
        renderCategories(productMenuTree.children[0]);
    }

    let closeTimer = null;

    const syncMegaMenuPosition = () => {
        if (!nav || !menuWrapper) {
            return;
        }

        const navRect = nav.getBoundingClientRect();
        const wrapperRect = menuWrapper.getBoundingClientRect();
        const leftOffset = navRect.left - wrapperRect.left;

        productsMenu.style.left = `${leftOffset}px`;
        productsMenu.style.width = `${navRect.width}px`;
        productsMenu.style.maxWidth = `${Math.min(navRect.width, window.innerWidth - 32)}px`;
    };

    const clearCloseTimer = () => {
        if (closeTimer) {
            window.clearTimeout(closeTimer);
            closeTimer = null;
        }
    };

    const openMegaMenu = () => {
        clearCloseTimer();
        syncMegaMenuPosition();
        productsMenu.classList.add('active');
        productsBtn.setAttribute('aria-expanded', 'true');
    };

    const closeMegaMenu = () => {
        clearCloseTimer();
        productsMenu.classList.remove('active');
        productsBtn.setAttribute('aria-expanded', 'false');
    };

    const scheduleCloseMegaMenu = () => {
        clearCloseTimer();
        closeTimer = window.setTimeout(() => {
            closeMegaMenu();
        }, 120);
    };

    // Desktop hover behavior
    productsBtn.addEventListener('mouseenter', openMegaMenu);
    productsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (productsMenu.classList.contains('active')) {
            closeMegaMenu();
            return;
        }

        openMegaMenu();
    });
    productsBtn.addEventListener('focus', openMegaMenu);
    productsBtn.addEventListener('mouseleave', scheduleCloseMegaMenu);
    productsMenu.addEventListener('mouseenter', openMegaMenu);
    productsMenu.addEventListener('mouseleave', scheduleCloseMegaMenu);
    menuWrapper?.addEventListener('mouseleave', scheduleCloseMegaMenu);
    window.addEventListener('resize', syncMegaMenuPosition);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMegaMenu();
        }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!productsBtn.contains(e.target) && !productsMenu.contains(e.target)) {
            closeMegaMenu();
        }
    });

    syncMegaMenuPosition();
}

function initMobileMenu() {
    const mobileMenuBtn = safeQuery('#mobileMenuBtn');
    const closeMobileMenuBtn = safeQuery('#closeMobileMenuBtn');
    const mobileMenu = safeQuery('#mobileMenu');
    const productsAccordion = safeQuery('#products-accordion');

    if (!mobileMenuBtn || !closeMobileMenuBtn || !mobileMenu || !productsAccordion) {
        return;
    }

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    const mobileProductMenu = safeQuery('#mobileProductMenu');
    if (!mobileProductMenu) {
        return;
    }

    mobileProductMenu.innerHTML = '';

    const renderMobileNodes = (nodes, container, depth = 0, inheritedDiscontinued = false) => {
        nodes.forEach(node => {
            const children = getNodeChildren(node);
            const isDiscontinued = inheritedDiscontinued || isDiscontinuedNode(node);
            const showGroupingBadge = children.length > 0 && isDiscontinued && depth >= 2;
            const wrapper = document.createElement('div');
            wrapper.className = 'mobile-menu-node';

            if (children.length) {
                const trigger = document.createElement('button');
                trigger.className = `accordion-trigger mobile-accordion-trigger text-left${isDiscontinued ? ' mobile-accordion-trigger-discontinued' : ''}`;
                trigger.style.paddingLeft = `${1 + depth}rem`;
                trigger.innerHTML = `<span class="mobile-menu-label">${withDiscontinuedBadge(node.title, showGroupingBadge)}</span><svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>`;

                const content = document.createElement('div');
                content.className = `accordion-content mobile-accordion-content${isDiscontinued ? ' mobile-accordion-content-discontinued' : ''}`;

                trigger.addEventListener('click', () => {
                    content.classList.toggle('active');
                    trigger.classList.toggle('active');
                });

                renderMobileNodes(children, content, depth + 1, isDiscontinued);
                wrapper.appendChild(trigger);
                wrapper.appendChild(content);
            } else {
                const link = document.createElement('a');
                link.href = resolveNodeHref(node, true);
                link.target = getNodeTarget(node);
                if (link.target === '_blank') {
                    link.rel = 'noreferrer noopener';
                }
                link.className = `mobile-menu-link${isDiscontinued ? ' mobile-menu-link-discontinued' : ''}${link.target === '_blank' ? ' mobile-menu-link-external' : ''}`;
                link.style.paddingLeft = `${1.5 + depth}rem`;
                link.textContent = normalizeMenuText(node.title);
                wrapper.appendChild(link);
            }

            container.appendChild(wrapper);
        });
    };

    renderMobileNodes(productMenuTree.children, mobileProductMenu);

    const productTrigger = safeQuery('.accordion-trigger[data-section="products"]');
    if (productTrigger && productsAccordion) {
        productTrigger.addEventListener('click', () => {
            productsAccordion.classList.toggle('active');
            productTrigger.classList.toggle('active');
        });
    }

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (!tabButtons.length || !tabContents.length) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('aria-controls');
            if (!tabId) return;

            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            const content = document.getElementById(tabId);
            if (content) content.classList.add('active');
        });
    });
}

function initSubTabs() {
    const subtabButtons = document.querySelectorAll('.subtab-btn');
    if (!subtabButtons.length) return;

    subtabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const subtabId = button.getAttribute('aria-controls');
            if (!subtabId) return;

            const container = button.closest('.subtabs-container');
            if (!container) return;

            container.querySelectorAll('.subtab-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            container.querySelectorAll('.subtab-content').forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            const content = document.getElementById(subtabId);
            if (content) content.classList.add('active');
        });
    });
}

function initContactForm() {
    const contactForm = safeQuery('#contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you within 24 hours.');
        contactForm.reset();

        const mobileMenu = safeQuery('#mobileMenu');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

function initProductGallery() {
    const gallery = safeQuery('.product-gallery');
    if (!gallery) return;

    const imageElement = safeQuery('#galleryCurrentImage');
    const thumbsContainer = safeQuery('#galleryThumbs');
    const counterElement = safeQuery('#galleryCounter');
    const prevButton = safeQuery('#galleryPrevBtn');
    const nextButton = safeQuery('#galleryNextBtn');

    if (!imageElement || !thumbsContainer || !counterElement || !prevButton || !nextButton) {
        return;
    }

    const basePath = (gallery.dataset.galleryPath || '').replace(/\\/g, '/').replace(/\/$/, '');
    const total = Number.parseInt(gallery.dataset.galleryTotal || '0', 10);
    const galleryName = gallery.dataset.galleryName || 'Product gallery';

    if (!basePath || !Number.isFinite(total) || total < 1) {
        return;
    }

    const images = Array.from({ length: total }, (_, index) => ({
        src: `${basePath}/${index + 1}.jpg`,
        alt: `${galleryName} gallery image ${index + 1}`
    }));

    let currentIndex = 0;
    let autoplayTimer = null;
    let touchStartX = 0;
    let touchDeltaX = 0;

    function updateGallery(index, animate = true) {
        currentIndex = (index + images.length) % images.length;
        const currentImage = images[currentIndex];

        if (animate) {
            imageElement.classList.add('is-transitioning');
        }

        window.setTimeout(() => {
            imageElement.src = currentImage.src;
            imageElement.alt = currentImage.alt;
            counterElement.textContent = `${currentIndex + 1} / ${images.length}`;

            thumbsContainer.querySelectorAll('.product-gallery-thumb').forEach((button, buttonIndex) => {
                const isActive = buttonIndex === currentIndex;
                button.classList.toggle('is-active', isActive);
                button.setAttribute('aria-current', isActive ? 'true' : 'false');

                if (isActive) {
                    button.scrollIntoView({
                        behavior: animate ? 'smooth' : 'auto',
                        block: 'nearest',
                        inline: 'center'
                    });
                }
            });

            imageElement.classList.remove('is-transitioning');
        }, animate ? 120 : 0);
    }

    function moveGallery(step) {
        updateGallery(currentIndex + step);
    }

    function startAutoplay() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || images.length < 2) {
            return;
        }

        stopAutoplay();
        autoplayTimer = window.setInterval(() => {
            moveGallery(1);
        }, 4500);
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            window.clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    thumbsContainer.innerHTML = images.map((image, index) => `
        <button
            class="product-gallery-thumb${index === 0 ? ' is-active' : ''}"
            type="button"
            aria-label="Show product image ${index + 1}"
            aria-current="${index === 0 ? 'true' : 'false'}"
            data-index="${index}">
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
        </button>
    `).join('');

    thumbsContainer.addEventListener('click', (event) => {
        const thumbButton = event.target.closest('.product-gallery-thumb');
        if (!thumbButton) return;

        const nextIndex = Number.parseInt(thumbButton.dataset.index || '0', 10);
        updateGallery(nextIndex);
        startAutoplay();
    });

    prevButton.addEventListener('click', () => {
        moveGallery(-1);
        startAutoplay();
    });

    nextButton.addEventListener('click', () => {
        moveGallery(1);
        startAutoplay();
    });

    gallery.addEventListener('mouseenter', stopAutoplay);
    gallery.addEventListener('mouseleave', startAutoplay);
    gallery.addEventListener('focusin', stopAutoplay);
    gallery.addEventListener('focusout', () => {
        if (!gallery.contains(document.activeElement)) {
            startAutoplay();
        }
    });

    gallery.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            moveGallery(-1);
            startAutoplay();
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault();
            moveGallery(1);
            startAutoplay();
        }
    });

    gallery.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0]?.clientX || 0;
        touchDeltaX = 0;
    }, { passive: true });

    gallery.addEventListener('touchmove', (event) => {
        const currentTouchX = event.touches[0]?.clientX || 0;
        touchDeltaX = currentTouchX - touchStartX;
    }, { passive: true });

    gallery.addEventListener('touchend', () => {
        if (Math.abs(touchDeltaX) > 45) {
            moveGallery(touchDeltaX > 0 ? -1 : 1);
            startAutoplay();
        }

        touchStartX = 0;
        touchDeltaX = 0;
    });

    updateGallery(0, false);
    startAutoplay();
}

function enhanceReviewCards() {
    if (!document.body.classList.contains('reviews-page')) {
        return;
    }

    const reviewCards = document.querySelectorAll('.reviews-showcase .review-card');
    if (!reviewCards.length) {
        return;
    }

    reviewCards.forEach(card => {
        const sourceHeading = card.querySelector('h4');
        const paragraphs = Array.from(card.querySelectorAll('p'));
        const quoteParagraph = paragraphs[paragraphs.length - 1];

        if (!sourceHeading || !quoteParagraph) {
            return;
        }

        const dateElement = card.querySelector('span.text-sm, div.text-amber-400, span[class*="rounded-full"]');
        const sourceText = sourceHeading.textContent.trim();
        const quoteText = quoteParagraph.textContent.trim();

        let authorText = 'Editorial Review';
        const authorParagraph = paragraphs.find(p => p !== quoteParagraph && p.textContent.trim());
        if (authorParagraph) {
            authorText = authorParagraph.textContent.trim();
        }

        let dateText = '';
        if (dateElement) {
            const cleaned = dateElement.textContent.replace(/[★â˜…]/g, '').trim();
            if (cleaned) {
                dateText = cleaned;
            }
        }

        const badgeText = sourceText.charAt(0).toUpperCase();

        card.innerHTML = `
            <div class="review-card-head">
                <div class="review-card-source">
                    <span class="review-card-badge" aria-hidden="true">${badgeText}</span>
                    <div>
                        <h4 class="review-card-title">${sourceText}</h4>
                        <p class="review-card-author">${authorText}</p>
                    </div>
                </div>
                ${dateText ? `<span class="review-card-date">${dateText}</span>` : ''}
            </div>
            <p class="review-card-quote">${quoteText}</p>
        `;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initDesktopMenu();
    initMobileMenu();
    initTabs();
    initSubTabs();
    initContactForm();
    initProductGallery();
    enhanceReviewCards();
});
