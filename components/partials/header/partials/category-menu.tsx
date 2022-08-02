import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import ALink from '~/components/features/alink'

function CategoryMenu(): JSX.Element {
  const query = useRouter().query
  const router = useRouter()
  const { t, lang } = useTranslation('common')

  function toggleDropdown(e) {
    e.preventDefault()

    if (
      document
        .querySelector('.category-dropdown .dropdown-menu')
        .classList.contains('show')
    ) {
      document
        .querySelector('.category-dropdown .dropdown-menu')
        .classList.remove('show')
    } else {
      document
        .querySelector('.category-dropdown .dropdown-menu')
        .classList.add('show')
    }
  }

  useEffect(() => {
    document
      .querySelector('.category-dropdown .dropdown-menu')
      .classList.remove('show')

    if (router.pathname == '/')
      document
        .querySelector('.category-dropdown .dropdown-menu')
        .classList.add('show')
  }, [router.pathname])

  return (
    <div className="dropdown category-dropdown">
      <a
        href="#"
        className="dropdown-toggle"
        title="Browse Categories"
        onClick={(e) => {
          toggleDropdown(e)
        }}
      >
        {t('browseCategories')}
      </a>

      <div className="dropdown-menu">
        <nav className="side-nav">
          <ul
            className="menu-vertical sf-arrows sf-js-enabled"
            style={{ touchAction: 'pan-y' }}
          >
            <li className="megamenu-container">
              <ALink
                className="sf-with-ul text-dark"
                href={{
                  pathname: '/shop/sidebar/list',
                  query: { category: 'electronics' },
                }}
              >
                <i className="icon-laptop"></i>Electronics
              </ALink>
              <div className="megamenu">
                <div className="row ">
                  <div className="col-md-8">
                    <div className="menu-col">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="menu-title">
                            Laptops &amp; Computers
                          </div>

                          <ul>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'desktop-computers' },
                                }}
                              >
                                Desktop Computers
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'monitors' },
                                }}
                              >
                                Monitors
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'laptops' },
                                }}
                              >
                                Laptops
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'ipad-and-tablets' },
                                }}
                              >
                                iPad &amp; Tablets
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: {
                                    category: 'hard-drives-and-storage',
                                  },
                                }}
                              >
                                Hard Drives &amp; Storage
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'printers-and-supplies' },
                                }}
                              >
                                Printers &amp; Supplies
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'computer-accessories' },
                                }}
                              >
                                Computer Accessories
                              </ALink>
                            </li>
                          </ul>

                          <div className="menu-title">TV &amp; Video</div>

                          <ul>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'tvs' },
                                }}
                              >
                                TVs
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'home-audio-speakers' },
                                }}
                              >
                                Home Audio Speakers
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'projectors' },
                                }}
                              >
                                Projectors
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: {
                                    category: 'media-streaming-devices',
                                  },
                                }}
                              >
                                Media Streaming Devices
                              </ALink>
                            </li>
                          </ul>
                        </div>

                        <div className="col-md-6">
                          <div className="menu-title">Cell Phones</div>

                          <ul>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'carrier-phones' },
                                }}
                              >
                                Carrier Phones
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'unlocked-phones' },
                                }}
                              >
                                Unlocked Phones
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: {
                                    category: 'phone-and-cellphone-cases',
                                  },
                                }}
                              >
                                Phone &amp; Cellphone Cases
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'cellphone-and-chargers' },
                                }}
                              >
                                Cellphone Chargers
                              </ALink>
                            </li>
                          </ul>

                          <div className="menu-title">Digital Cameras</div>

                          <ul>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'digital-slr-cameras' },
                                }}
                              >
                                Digital SLR Cameras
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: {
                                    category: 'sports-and-cction-cameras',
                                  },
                                }}
                              >
                                Sports &amp; Action Cameras
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'camcorders' },
                                }}
                              >
                                Camcorders
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'camera-lenses' },
                                }}
                              >
                                Camera Lenses
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'photo-printer' },
                                }}
                              >
                                Photo Printer
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'digital-memory-cards' },
                                }}
                              >
                                Digital Memory Cards
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'camera-bags' },
                                }}
                              >
                                Camera Bags, Backpacks &amp; Cases
                              </ALink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="banner banner-overlay h-100">
                      <ALink
                        href={{
                          pathname: '/shop/sidebar/list',
                          query: { category: 'electronics' },
                        }}
                        className="banner banner-menu h-100"
                      >
                        <img
                          src="images/home/menu/banner-1.jpg"
                          alt="Banner"
                          width="280"
                          height="440"
                          style={{ objectFit: 'fill' }}
                        />
                      </ALink>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="megamenu-container">
              <ALink
                className="sf-with-ul text-dark"
                href={{
                  pathname: '/shop/sidebar/list',
                  query: { category: 'furniture' },
                }}
              >
                <i className="icon-couch"></i>Furniture
              </ALink>

              <div className="megamenu">
                <div className="row ">
                  <div className="col-md-8">
                    <div className="menu-col">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="menu-title">Bedroom</div>

                          <ul>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'beds' },
                                }}
                              >
                                Beds, Frames &amp; Bases
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'dressers' },
                                }}
                              >
                                Dressers
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'nightstands' },
                                }}
                              >
                                Nightstands
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'headboards' },
                                }}
                              >
                                Kids&apos; Beds &amp; Headboards
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'armoires' },
                                }}
                              >
                                Armoires
                              </ALink>
                            </li>
                          </ul>

                          <div className="menu-title">Living Room</div>

                          <ul>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'coffee-tables' },
                                }}
                              >
                                Coffee Tables
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'chairs' },
                                }}
                              >
                                Chairs
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'tables' },
                                }}
                              >
                                Tables
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'futons-and-sofa-beds' },
                                }}
                              >
                                Futons &amp; Sofa Beds
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'cabinets-and-chests' },
                                }}
                              >
                                Cabinets &amp; Chests
                              </ALink>
                            </li>
                          </ul>
                        </div>

                        <div className="col-md-6">
                          <div className="menu-title">Office</div>

                          <ul>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'office-chairs' },
                                }}
                              >
                                Office Chairs
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'desks' },
                                }}
                              >
                                Desks
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'bookcases' },
                                }}
                              >
                                Bookcases
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'file-cabinets' },
                                }}
                              >
                                File Cabinets
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'breakroom-tables' },
                                }}
                              >
                                Breakroom Tables
                              </ALink>
                            </li>
                          </ul>

                          <div className="menu-title">Kitchen &amp; Dining</div>

                          <ul>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'dining-sets' },
                                }}
                              >
                                Dining Sets
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: {
                                    category: 'kitchen-storage-cabinets',
                                  },
                                }}
                              >
                                Kitchen Storage Cabinets
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'bakers-racks' },
                                }}
                              >
                                Bakers Racks
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'dining-chairs' },
                                }}
                              >
                                Dining Chairs
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'dining-room-tables' },
                                }}
                              >
                                Dining Room Tables
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'bar-stools' },
                                }}
                              >
                                Bar Stools
                              </ALink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="banner banner-overlay h-100">
                      <ALink
                        href={{
                          pathname: '/shop/sidebar/list',
                          query: { category: 'furniture' },
                        }}
                        className="banner banner-menu h-100"
                      >
                        <img
                          src="images/home/menu/banner-2.jpg"
                          alt="Banner"
                          width="280"
                          height="440"
                          style={{ objectFit: 'fill' }}
                        />
                      </ALink>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="megamenu-container">
              <ALink
                className="sf-with-ul text-dark"
                href={{
                  pathname: '/shop/sidebar/list',
                  query: { category: 'cooking' },
                }}
              >
                <i className="icon-concierge-bell"></i>Cooking
              </ALink>

              <div className="megamenu">
                <div className="menu-col">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="menu-title">Cookware</div>

                      <ul>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'cookware-sets' },
                            }}
                          >
                            Cookware Sets
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'pans' },
                            }}
                          >
                            Pans, Griddles &amp;Woks
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'pots' },
                            }}
                          >
                            Pots
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'skillets-and-grill-pans' },
                            }}
                          >
                            Skillets &amp;Grill Pans
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'kettles' },
                            }}
                          >
                            Kettles
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'soup and-Stockpots' },
                            }}
                          >
                            Soup &amp;Stockpots
                          </ALink>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-4">
                      <div className="menu-title">Dinnerware &amp;Tabletop</div>

                      <ul>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'plates' },
                            }}
                          >
                            Plates
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'cups-and-mugs' },
                            }}
                          >
                            Cups &amp;Mugs
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'trays-and-platters' },
                            }}
                          >
                            Trays &amp;Platters
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'coffee-and-tea-serving' },
                            }}
                          >
                            Coffee &amp;Tea Serving
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'salt-and-pepper Shaker' },
                            }}
                          >
                            Salt &amp;Pepper Shaker
                          </ALink>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-4">
                      <div className="menu-title">Cooking Appliances</div>

                      <ul>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'microwaves' },
                            }}
                          >
                            Microwaves
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'coffee-makers' },
                            }}
                          >
                            Coffee Makers
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'mixers-and-attachments' },
                            }}
                          >
                            Mixers &amp;Attachments
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'slow-cookers' },
                            }}
                          >
                            Slow Cookers
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'air-fryers' },
                            }}
                          >
                            Air Fryers
                          </ALink>
                        </li>
                        <li>
                          <ALink
                            href={{
                              pathname: '/shop/sidebar/list',
                              query: { category: 'toasters-and-ovens' },
                            }}
                          >
                            Toasters &amp;Ovens
                          </ALink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row menu-banners">
                    <div className="col-md-4">
                      <div className="banner h-100">
                        <ALink
                          href={{
                            pathname: '/shop/sidebar/list',
                            query: { category: 'cooking' },
                          }}
                        >
                          <img
                            src="images/home/menu/1.jpg"
                            alt="image"
                            width="251"
                            height="141"
                          />
                        </ALink>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="banner h-100">
                        <ALink
                          href={{
                            pathname: '/shop/sidebar/list',
                            query: { category: 'cooking' },
                          }}
                        >
                          <img
                            src="images/home/menu/2.jpg"
                            alt="image"
                            width="251"
                            height="141"
                          />
                        </ALink>
                      </div>
                    </div>

                    <div className="col-md-4 h-100">
                      <div className="banner">
                        <ALink
                          href={{
                            pathname: '/shop/sidebar/list',
                            query: { category: 'cooking' },
                          }}
                        >
                          <img
                            src="images/home/menu/3.jpg"
                            alt="image"
                            width="251"
                            height="141"
                          />
                        </ALink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="megamenu-container">
              <ALink
                className="sf-with-ul text-dark"
                href={{
                  pathname: '/shop/sidebar/list',
                  query: { category: 'clothing' },
                }}
              >
                <i className="icon-tshirt"></i>Clothing
              </ALink>

              <div className="megamenu">
                <div className="row ">
                  <div className="col-md-8">
                    <div className="menu-col">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="menu-title">Women</div>

                          <ul>
                            <li>
                              <ALink href={{ pathname: '/shop/sidebar/list' }}>
                                <strong>New Arrivals</strong>
                              </ALink>
                            </li>
                            <li>
                              <ALink href={{ pathname: '/shop/sidebar/list' }}>
                                <strong>Best Sellers</strong>
                              </ALink>
                            </li>
                            <li>
                              <ALink href={{ pathname: '/shop/sidebar/list' }}>
                                <strong>Trending</strong>
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'clothing' },
                                }}
                              >
                                Clothing
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'shoes' },
                                }}
                              >
                                Shoes
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'bags' },
                                }}
                              >
                                Bags
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'accessories' },
                                }}
                              >
                                Accessories
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'jewlery-and-watches' },
                                }}
                              >
                                Jewlery &amp;Watches
                              </ALink>
                            </li>
                            <li>
                              <ALink href={{ pathname: '/shop/sidebar/list' }}>
                                <strong>Sale</strong>
                              </ALink>
                            </li>
                          </ul>
                        </div>

                        <div className="col-md-6">
                          <div className="menu-title">Men</div>

                          <ul>
                            <li>
                              <ALink href={{ pathname: '/shop/sidebar/list' }}>
                                <strong>New Arrivals</strong>
                              </ALink>
                            </li>
                            <li>
                              <ALink href={{ pathname: '/shop/sidebar/list' }}>
                                <strong>Best Sellers</strong>
                              </ALink>
                            </li>
                            <li>
                              <ALink href={{ pathname: '/shop/sidebar/list' }}>
                                <strong>Trending</strong>
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'clothing' },
                                }}
                              >
                                Clothing
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'shoes' },
                                }}
                              >
                                Shoes
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'bags' },
                                }}
                              >
                                Bags
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'accessories' },
                                }}
                              >
                                Accessories
                              </ALink>
                            </li>
                            <li>
                              <ALink
                                href={{
                                  pathname: '/shop/sidebar/list',
                                  query: { category: 'jewlery-and-Watches' },
                                }}
                              >
                                Jewlery &amp;Watches
                              </ALink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="banner banner-overlay h-100">
                      <ALink
                        href={{
                          pathname: '/shop/sidebar/list',
                          query: { category: 'clothing' },
                        }}
                        className="banner banner-menu h-100"
                      >
                        <img
                          src="images/home/menu/banner-3.jpg"
                          alt="Banner"
                          width="280"
                          height="347"
                          style={{ objectFit: 'fill' }}
                        />
                      </ALink>
                    </div>
                  </div>
                </div>

                <div className="menu-col menu-brands d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-lg-2">
                      <a
                        href="#"
                        className="brand h-100"
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                      >
                        <img
                          src="images/brands/1.png"
                          alt="Brand Name"
                          width="100"
                          height="23"
                        />
                      </a>
                    </div>

                    <div className="col-lg-2">
                      <a
                        href="#"
                        className="brand h-100"
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                      >
                        <img
                          src="images/brands/2.png"
                          alt="Brand Name"
                          width="101"
                          height="34"
                        />
                      </a>
                    </div>

                    <div className="col-lg-2">
                      <a
                        href="#"
                        className="brand h-100"
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                      >
                        <img
                          src="images/brands/3.png"
                          alt="Brand Name"
                          width="100"
                          height="30"
                        />
                      </a>
                    </div>

                    <div className="col-lg-2">
                      <a
                        href="#"
                        className="brand h-100"
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                      >
                        <img
                          src="images/brands/4.png"
                          alt="Brand Name"
                          width="101"
                          height="39"
                        />
                      </a>
                    </div>

                    <div className="col-lg-2">
                      <a
                        href="#"
                        className="brand h-100"
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                      >
                        <img
                          src="images/brands/5.png"
                          alt="Brand Name"
                          width="100"
                          height="48"
                        />
                      </a>
                    </div>

                    <div className="col-lg-2">
                      <a
                        href="#"
                        className="brand h-100"
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                      >
                        <img
                          src="images/brands/6.png"
                          alt="Brand Name"
                          width="100"
                          height="23"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <ALink
                href={{
                  pathname: '/shop/sidebar/list',
                  query: { category: 'home-appliances' },
                }}
                className="text-dark"
              >
                <i className="icon-blender"></i>Home Appliances
              </ALink>
            </li>
            <li>
              <ALink
                href={{
                  pathname: '/shop/sidebar/list',
                  query: { category: 'healthy-and-beauty' },
                }}
                className="text-dark"
              >
                <i className="icon-heartbeat"></i>Healthy &amp; Beauty
              </ALink>
            </li>
            <li>
              <ALink
                href={{
                  pathname: '/shop/sidebar/list',
                  query: { category: 'shoes-and-boots' },
                }}
                className="text-dark"
              >
                <i className="icon-shoe-prints"></i>Shoes &amp; Boots
              </ALink>
            </li>
            <li>
              <ALink
                href={{
                  pathname: '/shop/sidebar/list',
                  query: { category: 'travel-and-outdoor' },
                }}
                className="text-dark"
              >
                <i className="icon-map-signs"></i>Travel &amp; Outdoor
              </ALink>
            </li>
            <li>
              <ALink
                href={{
                  pathname: '/shop/sidebar/list',
                  query: { category: 'smart-phones' },
                }}
                className="text-dark"
              >
                <i className="icon-mobile-alt"></i>Smart Phones
              </ALink>
            </li>
            <li>
              <ALink
                href={{
                  pathname: '/shop/sidebar/list',
                  query: { category: 'tv-and-audio' },
                }}
                className="text-dark"
              >
                <i className="icon-tv"></i>TV &amp; Audio
              </ALink>
            </li>
            <li>
              <ALink
                href={{
                  pathname: '/shop/sidebar/list',
                  query: { category: 'bag' },
                }}
                className="text-dark"
              >
                <i className="icon-shopping-bag"></i>Backpack &amp; Bag
              </ALink>
            </li>
            <li>
              <ALink
                href={{
                  pathname: '/shop/sidebar/list',
                  query: { category: 'music' },
                }}
                className="text-dark"
              >
                <i className="icon-music"></i>Musical Instruments
              </ALink>
            </li>
            <li>
              <ALink
                href={{
                  pathname: '/shop/sidebar/list',
                  query: { category: 'gift' },
                }}
                className="text-dark"
              >
                <i className="icon-gift"></i>Gift Ideas
              </ALink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default CategoryMenu
