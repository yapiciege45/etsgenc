import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Image from 'next/image';

export const RouteComponent = () => {
  const [page, setPage] = useState(0);
  const [choiceOne, setChoiceOne] = useState(0)
  const [choiceTwo, setChoiceTwo] = useState(0)
  const [choiceThree, setChoiceThree] = useState(0)
  const [choiceFour, setChoiceFour] = useState(0)
  const [choiceFive, setChoiceFive] = useState(0)
  const [choiceSix, setChoiceSix] = useState(0)
  const [testIsFinished, setTestIsFinished] = useState(false)
  const [selectedMarker, setSelectedMarker] = useState(null)

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  useEffect(() => {
    console.log(selectedMarker)
  }, [selectedMarker])

  const mapStyles = {
    height: "100%",
    width: "100%"
  };

  const defaultCenter = {
    lat: 36.910812209760635, lng: 30.680336026202355
  }

  return (
    <div className='min-h-[92vh] flex flex-col justify-center items-center w-full bg-gradient-to-r from-red-500 to-orange-500'>
      {( page == 0 && !testIsFinished &&
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-4xl'>Kendi Rotanı Oluşturmaya Hazır Mısın?</h2>
          <p>Kendine en uygun seyahat rotasını planlaman için sana sunduğumuz ufak testten geçmen gerekiyor? Buna hazırsan hadi başlayalım!</p>
          <a onClick={() => {setPage(1)}} className='mt-8 p-3 px-8 rounded-xl border-2 border-black hover:bg-black hover:text-white transition-all cursor-pointer'>Haydi Sor</a>
        </div>
      )}
      {(
        page > 0 && !testIsFinished && (
          <div className='bg-white rounded-xl p-5 w-2/6 relative'>
            <div onClick={() => {setPage(0)}} className='w-4 h-4 cursor-pointer absolute top-1 right-3 flex justify-center items-center rounded-full bg-slate-100 text-sm'>
              x
            </div>
            <div className='h-1 mt-3 flex w-full rounded-xl bg-slate-200'>
              <div className={`h-full ${page == 1 && 'w-0'} ${page == 2 && 'w-[25%]'} ${page == 3 && 'w-[50%]'} ${page == 4 && 'w-[75%]'} ${page == 5 && 'w-[100%]'} rounded-xl bg-orange-400 transition-all`}></div>
            </div>
            <div className='mt-5'>
              {
                page == 1 && (
                  <>
                    <p className=''>Rotanızı neye göre belirlemek istiyorsunuz?</p>
                    <div className='flex flex-col mt-5'>
                      <div className='flex cursor-pointer' onClick={() => setChoiceOne(0)}>
                        <input type="radio" value="0" name="choice1" checked={choiceOne == 0} onChange={() => setChoiceOne(0)} />
                        <p className='ml-2'>Bana sorulacak sorulara göre</p>
                      </div>
                      <div className='flex cursor-pointer' onClick={() => setChoiceOne(1)}>
                        <input type="radio" value="1" name="choice1" checked={choiceOne == 1} onChange={() => setChoiceOne(1)} />
                        <p className='ml-2'>Geçmiş tatil tecrübelerime göre</p>
                      </div>
                      <div className='flex cursor-pointer' onClick={() => setChoiceOne(2)}>
                        <input type="radio" value="2" name="choice1" checked={choiceOne == 2} onChange={() => setChoiceOne(2)} />
                        <p className='ml-2'>Yaş grubumun ilgisini çeken yerlere göre</p>
                      </div>
                    </div>
                  </>
                )
              }
              {
                page == 2 && (
                  <>
                    <p className=''>Tatilinizi nasıl yapmak istersiniz?</p>
                    <div className='flex flex-col mt-5'>
                      <div className='flex cursor-pointer' onClick={() => setChoiceTwo(0)}>
                        <input type="radio" value="0" name="choice2" checked={choiceOne == 0} onChange={() => setChoiceTwo(0)} />
                        <p className='ml-2'>Tur</p>
                      </div>
                      <div className='flex cursor-pointer' onClick={() => setChoiceTwo(1)}>
                        <input type="radio" value="1" name="choice2" checked={choiceOne == 1} onChange={() => setChoiceTwo(1)} />
                        <p className='ml-2'>Bireysel</p>
                      </div>
                      <div className='flex cursor-pointer' onClick={() => setChoiceTwo(2)}>
                        <input type="radio" value="2" name="choice2" checked={choiceOne == 2} onChange={() => setChoiceTwo(2)} />
                        <p className='ml-2'>Grup</p>
                      </div>
                    </div>
                  </>
                )
              }
              {
                page == 3 && (
                  <>
                    <p className=''>Nasıl tatil bölgelerini tercih edersiniz?</p>
                    <div className='flex flex-col mt-5'>
                      <input placeholder='Tercihlerinizi yazın' />
                    </div>
                  </>
                )
              }
              {
                page == 4 && (
                  <>
                    <p className=''>Bütçe aralığınız nedir?</p>
                    <div className='flex flex-col mt-5'>
                      <input placeholder='Bütçe aralığınızı yazın' />
                    </div>
                  </>
                )
              }
              {
                page == 5 && (
                  <>
                    <p className=''>Tercih ettiğiniz spesifik bir bölge var mı?</p>
                    <div className='flex flex-col mt-5'>
                      <input placeholder='Bölgeyi yazın' />
                    </div>
                  </>
                )
              }
              
                  <div className='mt-8 flex justify-between items-center'>
                    {
                      page == 1 ? (
                        <div className='p-3 px-8 bg-slate-200 rounded-xl cursor-pointer' onClick={() => setPage(0)}>
                          Çıkış
                        </div>
                      ) : (
                        <div className='p-3 px-8 bg-slate-200 rounded-xl cursor-pointer' onClick={() => setPage(page - 1)}>
                          Geri
                        </div>
                      )
                    }
                    
                    {
                      choiceOne == 0 && page < 5 ? (
                        <div className='p-3 px-8 bg-blue-500 rounded-xl text-white cursor-pointer' onClick={() => setPage(page + 1)}>
                          İleri
                        </div>
                      ) : (
                        <div className='p-3 px-8 bg-blue-500 rounded-xl text-white cursor-pointer' onClick={() => setTestIsFinished(true)}>
                          Bitir
                        </div>
                      )
                    }
                    
                  </div>
            </div>
          </div>
        )
      )}
      {
        testIsFinished && (
          <div className='w-full relative'>
            {
              selectedMarker != null && (
                <div className='w-2/6 bg-white z-50 absolute top-0 left-0 h-[92vh] overflow-y-scroll p-3'>
                  <div className='w-full flex justify-center'>
                    <Image 
                      src={selectedMarker.img}
                      width="300"
                      height="300"
                    />
                  </div>
                  <h1 className='text-2xl mt-3 font-bold text-center'>{selectedMarker.name}</h1>
                  <h2 className='mt-2 text-lg font-bold'>Genel Tanıtım</h2>
                  {selectedMarker.description}
                  <div className='w-full flex justify-between mt-5'>
                    <a className='p-3 border-2 rounded-xl px-8 border-blue-500 hover:bg-blue-500 hover:text-white transition-all' href={selectedMarker.link}>Work & Travel Başvurusu</a>
                    <a className='p-3 border-2 rounded-xl px-8 border-green-500 hover:bg-green-500 hover:text-white transition-all' href={selectedMarker.link}>Otel Sitesine Git</a>
                  </div>
                </div>
              )
            }
            <div className={`w-full h-[92vh] z-10`}>
            <LoadScript googleMapsApiKey='AIzaSyBSScWqSBTWgyp0SMyAolY9nMdT5DpiT6Q'>
              <GoogleMap
                clickableIcons={false}
                mapContainerStyle={mapStyles}
                zoom={8}
                center={defaultCenter}
              >
                <Marker onClick={() => setSelectedMarker({
                  name: 'Voyage Sorgun Otel',
                  img: '/voyage.jpeg',
                  link: 'https://www.etstur.com/Voyage-Sorgun',
                  description: (
                    <div>
                  <span class="conditionsText"> <div>
                  <p>Lüks konaklama alanları, özgün yeme-içme olanakları ve eğlence imkanlarıyla misafirlerine mükemmel deneyimler sunan Voyage Sorgun, huzur ve keyif dolu bir tatil yaşatmaya hazır! Sorgun Ormanı’ndan denize kadar uzanan yeşille mavinin eşsiz uyumuna tanıklık edeceğiniz tesiste, lezzetli ve eğlenceli bir tatil sizi bekliyor.</p>
                  <p>Türk ve dünya mutfağının en özel lezzetlerini geniş bir yelpazede sunan tesis; ana restoranın yanı sıra biri 24 saat açık olan 7 a la carte restoran, 2 snack restoran, 10 bar ve pastane ile misafirlerini benzersiz lezzetlerle buluşturuyor. Özenle hazırlanmış büfede, sevdiğiniz lezzetlerin yanı sıra yeni tatlar keşfedebilirsiniz. Kahvaltı, öğle ve akşam yemeği için kapılarını açan ana restoran Degusto, size lezzetle eğlenceyi bir arada yaşatıyor.<br />
                  <br />
                  Voyage Sorgun’da yer alan Beach Club, misafirlerin gündüz denizin ve güneşin tadını çıkarmasını sağlıyor. Gece ise canlı gösteriler, etkinlikler ve düzenlenen partilerle dolu dolu bir eğlence vadediyor.<br />
                  <br />
                  Fitness salonu, tenis kortu (dört adet sentetik çim zeminli), bovling, oyun ve sinema salonu ise misafirlerin tatillerine renk katacak aktivite olanakları sunuyor. Çocuk kulübü ve oyun alanı ile minik misafirleri yepyeni maceralar ve eğlenceli aktiviteler bekliyor.</p>
                  </div>
                  <div>
                  <div><strong>Ödüller ve Sertifikalar</strong><br />
                  &nbsp;</div>
                  <div>Voyage Sorgun, misafirlerini ağırlamaya başladığından&nbsp;&nbsp;beri pek çok ödüle değer görüldü. Başarısını, kazandığı ödüllerle taçlandıran tesis, misafir memnuniyeti konusundaki özeni ve ayrıcalıklı hizmetleri ile öne çıkıyor.
                  <div><strong>2022</strong></div>
                  <div>Otelpuan Award</div>
                  <div>
                  <div>Recommended on HolidayCheck</div>
                  </div>
                  </div>
                  <div><strong>2021</strong></div>
                  <div>Otelpuan Award</div>
                  <div>Tripadvisor - Traveler’s Choice</div>
                  <div>Holidaycheck – Recommended 5.8</div>
                  <div><strong>2020</strong></div>
                  <div>Tripadvisor Traveler’s Choice</div>
                  <div>Otelpuan Award</div>
                  <div>Tui&nbsp;Global Hotel Award</div>
                  <div><strong>2019</strong></div>
                  <div>Tripadvisor Top 10 All Inclusive Resort</div>
                  <div>Tripadvisor Travelers Choice</div>
                  <div>Otelpuan</div>
                  <div>Holiday Check Recommanded On</div>
                  <div>Holidaycheck World’s Top 100</div>
                  <div>Recommended On Holidaycheck</div>
                  <div><strong>2018</strong></div>
                  <div>Tripadvisor Certificate Of Excellence</div>
                  <div>Otelpuan Gold</div>
                  <div>Tripadvisor Top 10 All Inclusive Resort</div>
                  <div>Tripadvisor Travellers Choice</div>
                  <div>Booking.Com Guest Review Awards</div>
                  <div>Thomas Cook Sunny Heart Silver</div>
                  <div>Holidaycheck World’s Top 100</div>
                  <div><strong>Sertifikalar</strong></div>
                  <div>Sürdürülebilir Turizm Sertifikası</div>
                  <div>Iso 9001 Quality Management System</div>
                  <div>Iso 22000 Food Management System</div>
                  <div>Iso 14001 Eviroment Management System</div>
                  <div>Iso 10002 Guest Satisfaction Management System</div>
                  <div>Ohsas 18001 Employ Health And Safety Management System</div>
                  <div>Blue Flag</div>
                  <div>Green Star</div>
                  <div>Green Key</div>
                  <div>Travel Life Gold</div>
                  </div>
                  </span>
                  </div>
                  )
                })} position={{lat: 36.7568138, lng: 31.416672}} />
                <Marker onClick={() => setSelectedMarker({
                  name: 'Asteria Kemer Resort',
                  img: '/asteria.jpeg',
                  link: 'https://www.etstur.com/Asteria-Kemer-Resort',
                  description: (
                    <div>
                      <span class="conditionsText"> <p>Kemer Çamyuva’da denize sıfır konumda misafirlerini ağırlayanAsteria Kemer Resort, göz alabildiğine uzanan plajı, açık havuzları ve geniş güneşlenme alanları ile misafirleri deniz ve güneşle buluşturuyor.</p>
                        <p>Tesiste güne zengin bir kahvaltıyla başlayan misafirler, gün boyu leziz öğünlerin yanı sıra kolayca erişebildikleri atıştırmalıklar ve serinletici içeceklerle tatil boyunca damak şöleni yaşıyor. Tesiste farklı damak tatlarına uygun a la carte restoranlar da hizmet veriyor.</p>
                        <p>Ailenin tüm üyelerinin düşünüldüğü tesiste çocuklar için mini kulüp, plajda çocuk oyun alanı bulunuyor ayrıca çocuklara yönelik animasyonlar düzenleniyor.</p>
                        <p>Asteria Kemer Resort, SPA merkezinde sunduğu masaj, hamam, sauna gibi olanaklarla misafirlerine kendilerini muhteşem hissedecekleri bir atmosfer sunuyor.</p>
                        <p>Tesis, Kemer merkeze arabayla 10&nbsp;dakikalık uzaklıkta yer alıyor.</p>
                      </span>
                    </div>
                  )
                })} position={{lat: 36.551564, lng: 30.5605615}} />
                <Marker onClick={() => setSelectedMarker({
                  name: 'Club Nena',
                  img: '/clubnena.jpeg',
                  link: 'https://www.etstur.com/Club-Nena',
                  description: (
                    <div>
                      <p>Güneş, deniz ve doğanın buluştuğu Manavgat'ta; 98 dönüm arazi üzerine kurulu, bahçesinde 135 çeşit bitki ve ağaç türleri bulunan Club Nena; misafirlerine huzur ve mutluluk dolu bir tatil vadediyor. Ayrıca misafirlerine, İyi Tarım Uygulaması ile kendi çiftliğinde ürettiği sebzeleri sunuyor.</p>
                    </div>
                  )
                })} position={{lat: 36.7231784, lng: 31.5308018}} />
                <Marker onClick={() => setSelectedMarker({
                  name: 'Siu Collection',
                  img: '/siu.jpeg',
                  link: 'https://www.etstur.com/Aydinbey-Siu-Collection',
                  description: (
                    <div>
<p>Kemer’in eşsiz bir doğaya sahip&nbsp;tatil yerlerinden&nbsp;Beldibi’nde bulunan ve denize sıfır konumda hizmet veren Aydınbey Siu Collection&nbsp;, kendisine ait uzun plajı ve güneşlenme alanının yanı sıra geniş açık havuzları ve eğlenceli aquparkıyla aile boyu eğlenceli bir yaz tatili sunuyor.</p>
<p>Tesiste güne zengin bir kahvaltıyla başlayan misafirler, gün boyu leziz öğünlerin yanı sıra kolayca erişebildikleri atıştırmalıklar ve serinletici içeceklerle tatil boyunca damak şöleni yaşıyor.</p>
<p>Her yaştan misafirin düşünüldüğü tesiste minik misafirler için&nbsp;çocuk havuzu ve&nbsp;çocuk büfesi&nbsp;&nbsp;bulunuyor.</p>
<p>Aydınbey Siu Collection&nbsp;bünyesindeki SPA merkezinde; usta ellerden masaj imkanı, sauna, Türk hamamının yanı sıra fitness merkezi bulunuyor. Misafirler bu alanda yılın yorgunluğundan arınıp enerji depoluyor. &nbsp;</p>
<p>Misafirlerinin günün her anından keyif almasını hedefleyen Aydınbey Siu Collection&nbsp;’da gündüz oyunlar ve spor aktiviteleri, gece&nbsp;ise canlı müzik performansları ya da sahne şovları gerçekleşiyor.</p>
<p>Tesis; Kemer merkeze 15 km, Antalya merkeze 30 km ve Antalya Havaalanı'na 45 km uzaklıkta yer alıyor.</p>                    </div>
                  )
                })} position={{lat: 36.7043477, lng: 29.3489456}} />
              </GoogleMap>
            </LoadScript>
            </div>
          </div>
        )
      }
    </div>
  )
}