import React, { useEffect, useMemo, useState } from 'react'
import { Icon } from '@iconify/react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Accordion from '@radix-ui/react-accordion';

import BellBoysJson from '../data/bellboys.json';

import Footer from '../shared/Footer';
import Nav from '../shared/Nav';

const filters = [
  {
    name: 'Background',
    items: ['#bf9d60', '#bf5a5a', '#b1b299', '#82c89e', '#c8c8c8', '#b39ddb', '#663931', '#a1887f', '#8d6e63', '#6ccd84', '#207474', '#5bc8b6', '#ffcc80']
  },
  {
    name: 'Body',
    items: ['Borat', 'Red Robe', 'Chain', 'Dark Cape', 'Buddhist', 'Purple Suit', 'Cyan Cape', 'Nurse', 'Broken Arm At Hospital', 'Mummy', 'Leather Jacket', 'Woven Shirt', 'Striped Shirt', 'White Tank Top', 'Coat With Hoodie', 'Work Clothes', 'Blue Shirt With Black Turtleneck', 'Wizard', 'One White Stripe Shirt', 'Fire Fighter N2', 'Pepe Shirt', 'Medieval Shirt', 'Evil Shirt', 'Black Tank Top', 'Leather Jacket 2', 'Robot', 'Dino Vest', 'Eye On Body', 'Snow Military Suit', 'Black Jester', 'Running Clothes', 'Wool Shirt', 'Vengeful Cape', 'Cousy Vest', 'Asylum Clothes', 'Sandstorm Outfit', 'Black Armor Without Undershirt', 'Fire Fighter', 'Ripped Black Tshirt', 'Tang Suit', 'Duck Shirt', 'NetOut Fit', 'Tuareg Clothing', 'Jeans Overalls', 'Gray Coat', 'Black Sweater With Long Coat', 'Pharaoh', 'Apron', 'Agent Suit', 'Overall With Hoodie', 'Military Suit', 'Green Polo', 'Ancient Robot', 'Brown Overall With Hoodie', 'Rain Coat', 'Striped Tshirt', 'Asian Shirt', 'Shirt With Pants Strap', 'Muscle', 'Purple Hoodie', 'Fur Coat', 'Stone', 'Angel Suit', 'Zombie Type', 'Plant Body', 'Drunk Worker', 'Karate', 'Tactical Suit', 'Zombie', 'Black Hoodie', 'White Shirt', 'Green Cape', 'Royal Cloak', 'Sport Jacket', 'Shirt With Black Sweater', 'Checker Shirt', 'Clown', 'Suit', 'Coat With Scarf', 'Yellow Rain Coat', 'Red Cut Sleeves Shirt', 'Police Vest', 'Plague Doctor Outfit', 'Jester', 'Lab Coat', 'Ice Armor', 'Sweater With Coller', 'Purple Flame Shirt', 'Blue And Black Shirt', 'Armor', 'Orange And Black Shirt', 'Golden Armor', 'Red Cape', 'Cape With Kimono', 'White And Black Sleeveles Shirt', 'Green Zipper Hoodie', 'Blue Suit', 'Blue Dark Cape', 'Dirty Clothes']
    // items: ['Blue And Black Shirt', 'Blue Shirt With Black Turtleneck', 'Jeans Overalls', 'Fire Fighter', 'Lab Coat', 'Woven Shirt', 'White And Black Sleeveles Shirt', 'Agent Suit', 'Shirt With Pants Strap', 'One White Stripe Shirt', 'Gray Coat', 'Chain', 'Leather Jacket', 'Cyan Cape', 'Robot', 'Broken Arm At Hospital', 'Red Cut Sleeves Shirt', 'Yellow Rain Coat', 'Purple Suit', 'Overall With Hoodie', 'Apron', 'Zombie', 'White Shirt', 'Tactical Suit', 'Plant Body', 'Nurse', 'Ripped Black Tshirt', 'Zombie Type', 'Fur Coat' , 'Vengeful Cape', 'Cousy Vest', 'Wool Shirt', 'Striped Tshirt', 'Cape With Kimono', 'White Tank Top', 'Striped Shirt', 'Checker Shirt', 'Karate', 'Drunk Worker', 'Sandstorm Outfit', 'Suit', 'Ancient Robot', 'Shirt With Black Sweater', 'Dark Cape', 'Tuareg Clothing', 'Evil Shirt', 'Ice Armor', 'Clown', 'Green Zipper Hoodie', 'Asian Shirt', 'Asylum Clothes', 'Armor', 'Golden Armor', 'Police Vest', 'Purple Flame Shirt', 'Leather Jacket 2', 'Red Cape', 'Black Hoodie', 'Work Clothes', 'Buddhist', 'Dirty Clothes', 'Jester', 'Pepe Shirt', 'Black Jester', 'Black Sweater With Long Coat', 'Eye On Body', 'Red Robe', 'Stone', 'Purple Hoodie', 'Sweater With Coller', 'Medieval Shirt', 'Blue Dark Cape', 'Angel Suit', 'Royal Cloak', 'Sport Jacket', 'Running Clothes', 'Duck Shirt', 'Pharaoh', 'Brown Overall With Hoodie', 'Net Out Fit', 'Orange And Black Shirt', 'Black Tank Top', 'Rain Coat', 'Wizard', 'Blue Suit', 'Black Armor Without Undershirt', 'Tang Suit', 'Muscle', 'Military Suit', 'Borat', 'Mummy', 'Coat With Scarf', 'Green Cape', 'Dino Vest', 'Green Polo', 'Snow Military Suit', 'Coat With Hoodie', 'Fire Fighter N2', 'Plague Doctor Outfit']
    // items: ['Ice Armor', 'Police Vest', 'Overrall With Hoodie', 'Broken Arm At Hospital', 'Black Sweater With Long Coat', 'Karate', 'Wool Shirt', 'Vegeful Cape', 'Gray Coat', 'Pepe S hirt', 'Red Cape', 'White And Black Sleeveles Shirt', 'Leather Jacket', 'Shirt With Black Sweater', 'Blue Suit', 'Balck Tank Top', 'Green Zipper Hoodie', 'Stone', 'Fire Fig hter N2', 'Jester', 'Ripped Black Tshirt', 'Shirt With Pants Strap', 'Mummy', 'Zombie', 'Red Cut Sleaves Shirt', 'Wizzard', 'Angel Suit', 'Net Out FIt', 'Wooven Shirt', 'Du ck Shirt', 'Black Armor With Out Undershirt', 'Agent Suit', 'Cape With Kimono', 'Golden Armor', 'Muscle', 'Armor', 'Coat With Scarf', 'Asian Shirt', 'Dino Vest', 'Snow Mili tary Suit', 'Fire Fighter', 'Medieval Shir', 'Plague Doctor Outfit', 'Cousy Vest', 'Green Polo', 'Leather Jacket 2', 'Purple Flame Shirt', 'Work Clothes', 'Nurse', 'Brown O verrall With Hoodie', 'Chain', 'Orange And Black Shirt', 'Sweater With Coller', 'Blue Dark Cape', 'Purple Hoodie', 'One White Stripe Shirt', 'Black Jester', 'Zombie Type 2', 'Red Robe', 'Tactical Suit', 'White Shirt', 'Suit', 'White Tank Top', 'Lab Coat', 'Borat', 'Plant Body', 'Fur Coat', 'Sandstorm Outfit', 'Royal Cloak', 'Green Cape', 'Rob ot', 'Purple Suit', 'Blue Shirt With Black Turtleneck', 'Tang Suit', 'Evil Shirt', 'Coat With Hoodie', 'Dirty Clothes', 'Rain Coat', 'Dark Cape', 'Sport Jacket', 'Asylam Cl othes', 'Clown', 'Blue And Black Shirt', 'Jeans Overalls', 'Drunk WOrker', 'Pharaoh', 'Buddhist', 'Striped Tshirt', 'Running Clothes', 'Checker Shirt', 'Striped Shirt', 'An cient Robot', 'Yellow Rain Coat', 'Military Suit', 'Black Hoodie', 'Apron', 'Eye On Body', 'Tuareg Clothing', 'Cyan Cape']
  },
  {
    name: 'Bell',
    items: ['Ancient Brown Bell', 'Thug Bell', 'Blue Bell', 'Square Bell', 'Thug 2', 'Gold Light Bell', 'Ancient Bell', 'Dirt', 'Giant Gem Bell', 'Nerd Bell', 'Faced Bell', 'Bell The Time Whole', 'Brick', 'TV Bell', 'Mutant Bell', 'Golden Ancient Bell', 'Golden Bell', 'Iron Bell', 'Orange Bell', 'Tiny Bell', 'Dark Bell', 'Maya Bell', 'Bell What is This', 'Nothing', 'Light Bell', 'Golden Age Bell', 'Light Blue Bell', 'Emerald Bell', 'Spiritic Bell', 'White Bell With Bell', 'Invert Bell']
    // items: ['Light Blue Bell', 'Dark Bell', 'Golden Ancient Bell', 'Emrald Bell', 'TV Bell', 'Gaint Gem Bell', 'Golden Bell', 'Light Bell', 'Maya Bell', 'Dirt', 'Faced Bell', 'Invert Bell', 'Orange Bell', 'Thug Bell', 'Iron Bell', 'Ancient Brown Bell', 'Square Bell', 'Nerd Bell', 'Tiny Bell', 'Spiritic Bell', 'Ancient Bell', 'Golden Age Bell', 'Gold Lig ht Bell', 'Bell The Time Whole', 'Brick', 'Mutant Bell', 'Thug 2', 'Bell What is This', 'White Bell With Bell', 'Nothing', 'Blue Bell']
  },
  {
    name: 'Chain',
    items: ['None', 'Diamond Chain', 'Golden Chain', 'Silver Chain']
  },
]






export default function Gallery() {
  const nftPerShow = 20;
  const paginationPerShow = 5;

  const [nftOffSet, setNftOffSet] = useState(0)
  const [paginations, setPaginations] = useState([])

  const [currentPagination, setCurrentPagination] = useState(0)
  const [currentFilter, setCurrentFilter] = useState(null)

  const [openModal, setOpenModal] = useState(false)
  const [selectedNft, setSelectedNft] = useState(BellBoysJson[0])
  const [activeFilters, setActiveFilters] = useState({})
  const [forceRender, setForceRerender] = useState(false)

  const filteredNfts = useMemo(() => {
    if (activeFilters[filters[0].name] == undefined) return BellBoysJson

    let emptyFilters = 0

    filters.forEach((data) => {
      if (activeFilters[data.name].length == 0) {
        emptyFilters += 1
      }
    })

    if (filters.length == emptyFilters) return BellBoysJson

    return BellBoysJson.filter((nft) => {
      let has = false

      for (let i = 0; i < filters.length; i++) {
        let val = filters[i]

        if (activeFilters[val.name].length > 0) {
          let nftAttribute = nft.attributes.find((attr) => attr.trait_type == val.name)

          if (activeFilters[val.name].includes(nftAttribute.value)) {
            has = true
            break;
          }
        }
      }

      return has
    })
  }, [forceRender])

  const paginatedNfts = filteredNfts.slice(nftOffSet, nftOffSet + nftPerShow)

  const paginationLength = useMemo(() => {
    return Math.ceil(filteredNfts.length / nftPerShow);
  }, [filteredNfts])

  useEffect(() => {
    let _activeFilters = {}
    filters.forEach((val) => {
      _activeFilters[val.name] = []
    })

    setActiveFilters(_activeFilters)
  }, [])

  useEffect(() => {
    const result = Array(paginationLength).fill(null).map((_, idx) => idx)
    setPaginations(result.slice(currentPagination, currentPagination + paginationPerShow))
    setCurrentPagination(0)
  }, [paginationLength])

  useEffect(() => {
    const result = Array(paginationLength).fill(null).map((_, idx) => idx)

    if (currentPagination > paginations[paginations.length - 1] || paginations.length == 0) {
      setPaginations(result.slice(currentPagination, currentPagination + paginationPerShow))
    }
  }, [currentPagination])

  function prevPagination() {
    const prev = currentPagination - 1
    const offset = (prev * nftPerShow) % filteredNfts.length
    setNftOffSet(offset)
    setCurrentPagination(prev)
  }


  function nextPagination() {
    const next = currentPagination + 1
    const offset = (next * nftPerShow) % filteredNfts.length
    setNftOffSet(offset)
    setCurrentPagination(next)
  }

  function setPagination(num) {
    const offset = (num * nftPerShow) % filteredNfts.length
    setNftOffSet(offset)
    setCurrentPagination(num)
  }

  function nftModalPopUp(nftData) {
    setSelectedNft(nftData)
    setOpenModal(true)
  }

  function filterOnChange(type, value) {
    if (activeFilters[type].includes(value) == false) {
      activeFilters[type].push(value)
    } else {
      activeFilters[type] = activeFilters[type].filter((val) => val != value)
    }

    let x = activeFilters
    setActiveFilters({})
    setActiveFilters(x)

    setForceRerender(!forceRender)
  }

  return (
    <div className='bg-page min-h-screen w-full flex flex-col'>
      <Nav />

      <Dialog.Root open={openModal} onOpenChange={(open) => setOpenModal(open)}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 fixed inset-0 cursor-pointer" />

          <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60vw] rounded-[16px] bg-page p-[25px] shadow-xl focus:outline-none">

            <div className='grid grid-cols-2 gap-x-[32px]'>
              <img src={selectedNft.image} />
              <div className='flex flex-col gap-y-[40px]'>
                <div>
                  <h5 className='text-gallery-nft-title'>{selectedNft.title}</h5>
                  <h5 className='text-gallery-nft-sub text-[36px]'>{selectedNft.id}</h5>
                </div>
                <div className='grid grid-cols-2 gap-[8px]'>
                  {selectedNft.attributes.map((attribute) => (
                    <div className='bg-box py-[4px] px-[16px] rounded-[8px]'>
                      <h5 className='font-sub text-input text-[16px]'>{attribute.trait_type}</h5>
                      <h5 className='font-main text-text text-[24px]'>{attribute.value}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Content>

        </Dialog.Portal>

      </Dialog.Root>

      <div className='flex justify-center px-[32px] gap-x-[32px] py-[64px]'>

        <div className='min-w-[248px] asdsaw-[315px] h-fit bg-box rounded-[16px] py-[20px] px-[16px] flex flex-col gap-y-[20px]'>
          <div className='rounded-[16px] py-[4px] px-[24px] bg-[#CCC5B9] flex items-center'>
            <input type='text' placeholder='Search' className='text-search-filter' /> <Icon icon="ri:search-line" width={20} height={20} className='text-box' />
          </div>

          {activeFilters && (
            <ul className='flex flex-col  gap-y-[20px]'>
              <Accordion.Root collapsible value={currentFilter} onValueChange={(val) => setCurrentFilter(val)}>

                {filters.map((data, idx) => (
                  <Accordion.Item key={idx} value={data.name}>
                    <Accordion.Header>

                      <Accordion.Trigger className='flex items-center justify-between w-full'>
                        <h5 className={currentFilter == data.name ? 'text-gallery-active-filter' : 'text-gallery-filter'}>{data.name}</h5>
                        {currentFilter == data.name ? (
                          <Icon icon="ri:subtract-line" width={20} height={20} />
                        ) : (
                          <Icon icon="ri:add-line" width={20} height={20} />
                        )}
                      </Accordion.Trigger>

                    </Accordion.Header>

                    <Accordion.Content className='cursor-pointer flex flex-col pt-[8px] gap-y-[8px]'>
                      {data.items.map((value) => activeFilters[data.name]?.includes(value) ?? false ? (
                        <div key={value} className='pl-[16px] flex items-center justify-start gap-x-[8px]' onClick={() => filterOnChange(data.name, value)}>
                          <input type="checkbox" checked={activeFilters[data.name]?.includes(value) ?? false} onChange={() => { }} />
                          <h5 className='text-gallery-active-filter'>{value}</h5>
                        </div>
                      ) : (
                        <div key={value} className='pl-[16px] flex items-center justify-start gap-x-[8px]' onClick={() => filterOnChange(data.name, value)}>
                          <input type="checkbox" checked={activeFilters[data.name]?.includes(value) ?? false} onChange={() => { }} />
                          <h5 className='text-gallery-filter'>{value}</h5>
                        </div>
                      ))}
                    </Accordion.Content>

                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </ul>
          )}

        </div>

        <div className='w-[1096px]'>
          <div className='grid grid-cols-5 justify-center gap-[24px] h-fit'>
            {paginatedNfts.map((data, idx) => (
              <div key={idx} onClick={() => nftModalPopUp(data)} className='flex flex-col rounded-[16px] cursor-pointer bg-box w-[200px]'>
                <img src={data.image} width={200} height={200} className='rounded-t-[16px]' />

                <div className='flex flex-col items-center py-[8px]'>
                  <h5 className='text-gallery-nft-title'>{data.title}</h5>
                  <p className='text-gallery-nft-sub'>{data.id}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='flex items-center flex-wrap justify-center gap-x-[32px] pt-[32px]'>
            <button onClick={prevPagination} disabled={currentPagination == 0}>
              <Icon icon="ri:arrow-left-circle-line" className={currentPagination == 0 ? 'text-gray-500' : 'text-white'} width={48} height={48} />
            </button>

            {paginations.map((num) =>
              currentPagination == num ?
                (
                  <div key={num} className='rounded-full border-2 border-primary flex items-center justify-center w-[24px] h-[24px]'>
                    <span className='text-sub text-primary text-[9px]'>
                      {num + 1}
                    </span>
                  </div>
                ) : (
                  <div key={num} onClick={() => setPagination(num)} className='cursor-pointer rounded-full border-2 border-white flex items-center justify-center w-[24px] h-[24px]'>
                    <span className='text-sub text-white text-[9px]'>
                      {num + 1}
                    </span>
                  </div>
                )

            )}

            <button onClick={nextPagination} disabled={currentPagination == paginationLength}>
              <Icon icon="ri:arrow-right-circle-line" className={currentPagination == paginationLength ? 'text-gray-500' : 'text-white'} width={48} height={48} />
            </button>
          </div>
        </div>

      </div>

      <Footer />

    </div >
  )
}
