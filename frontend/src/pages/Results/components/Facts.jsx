import sunburnArt from "../../../assets/sunburn-art.jpg";
import burnInjuryArt from "../../../assets/burn-injury1.jpg";
import poxvirusArt from "../../../assets/poxvirus-fact.png";
import poxvirusArt2 from "../../../assets/skincancer.jpg";

function LightBurnSteps() {
  const steps = [];
  return (
    <div className="sm:py-16 mx-auto flex flex-wrap transition-all ease-in duration-300">
      <h1 className="text-3xl text-center md:text-left mb-10 capitalize font-normal">
        Treating Sunburns
      </h1>
      <div className="flex flex-wrap w-full">
        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 1
              </h2>
              <p className="leading-relaxed">
                Cool the burn. Immediately immerse the burn in cool tap water or
                apply cold, wet compresses. Do this for about 10 minutes or
                until the pain subsides.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 2
              </h2>
              <p className="leading-relaxed">
                Apply petroleum jelly two to three times daily.
                <br /> Do not apply ointments, toothpaste or butter to the burn,
                as these may cause an infection. Do not apply topical
                antibiotics.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 3
              </h2>
              <p className="leading-relaxed">
                Cover the burn with a nonstick, sterile bandage. If blisters
                form, let them heal on their own while keeping the area covered.
                Do not pop the blisters.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                STEP 4
              </h2>
              <p className="leading-relaxed">
                Consider taking over-the-counter pain medication. Acetaminophen
                or ibuprofen can help relieve the pain and reduce inflammation.
              </p>
            </div>
          </div>
          <div className="flex relative">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                Lastly!
              </h2>
              <p className="leading-relaxed">
                <ol>
                  <li>Protect the area from the sun.</li>
                  <li>
                    Once the burn heals, protect the area from the sun by
                    seeking shade, wearing protective clothing or applying a
                    broad-spectrum, water-resistant sunscreen with an SPF of 30
                    or higher.
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
        <img
          className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
          src={sunburnArt}
          alt="lightburn-art"
        />
      </div>
    </div>
  );
}

function ModerateBurnSteps() {
  return (
    <div className="sm:py-16 mx-auto">
      <h1 className="mb-10 text-3xl font-bold">What you should do</h1>
      <div class="flex flex-wrap">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            class="object-cover object-center h-full w-full"
            src={burnInjuryArt}
          />
        </div>
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-700 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg lg:text-xl title-font font-medium mb-3">
                Immediate Actions
              </h2>
              <ol class="leading-relaxed text-base list-decimal ml-4">
                <li>Immerse in cool water for 10 or 15 minutes.</li>
                <li>
                  Don't apply ice. It can lower body temperature and cause
                  further pain and damage.
                </li>
                <li>
                  Don't break blisters or apply butter or ointments, which can
                  cause infection.
                </li>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </ol>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-700 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg lg:text-xl font-medium mb-3">
                Protect Burn
              </h2>
              <p class="leading-relaxed text-base">
                Cover loosely with sterile, nonstick bandage and secure in place
                with gauze or tape.
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-700 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg lg:text-xl title-font font-medium mb-3">
                See a Doctor
              </h2>
              <p class="leading-relaxed text-base">
                The doctor can test burn severity, prescribe antibiotics and
                pain medications, and administer a tetanus shot, if needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MonkeyPoxFacts() {
  function RashRelief() {
    return (
      <div className="py-16 mx-auto ">
        <div class="flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src={poxvirusArt}
            />
          </div>
          <div class="flex flex-col flex-wrap -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <h1 className="text-3xl mb-10">Rash Relief</h1>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  A Few important habits
                </h2>
                <p class="leading-relaxed text-base">
                  <ol className="list-disc ml-4 space-y-1 mb-6">
                    <li>Don't lance (pop) or scratch lesions from the rash.</li>
                    <li>
                      Do not shave the area with the rash until the scabs have
                      fallen off and a new layer of skin has formed.
                    </li>
                    <li>
                      Keep skin lesions/rash clean and dry when not showering or
                      bathing.
                    </li>
                  </ol>
                </p>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Topical benzocaine/lidocaine gels
                </h2>
                <p class="leading-relaxed text-base">
                  Apply Topical benzocaine/lidocaine gels for temporary relief.
                  <br />
                  Oral antihistamines such as Benadryl and topical creams such
                  as calamine lotion or petroleum jelly may help with itching.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Taking a warm bath
                </h2>
                <p class="leading-relaxed text-base">
                  Soaking in a warm bath (using oatmeal or other over-thecounter
                  bath products for itchy skin) may offer some relief to the
                  dry, itchy sensations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function PainRelief() {
    return (
      <div className="py-16 mx-auto ">
        <div class="flex flex-wrap">
          <div class="flex flex-col flex-wrap -mb-10 lg:w-1/2 lg:pr-12 lg:text-left text-center">
            <h1 className="text-3xl mb-10">Pain Relief</h1>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Medicines
                </h2>
                <p class="leading-relaxed text-base">
                  ibuprofen (Advil, Motrin) and acetaminophen (Tylenol) can help
                  you feel better. Your healthcare provider may prescribe stronger pain relievers
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  For rashes in the mouth
                </h2>
                <p class="leading-relaxed text-base">
                Rinse with salt
water at least four times a day. Prescription mouthwashes, or
local anesthetics like viscous lidocaine can be used to manage
pain. Oral antiseptics like chlorhexidine mouthwash can be used
to help keep the mouth clean.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Contact a doctor
                </h2>
                <p class="leading-relaxed text-base">
                  Contact your healthcare provider if pain becomes severe and
                  unmanageable at home.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src={poxvirusArt2}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <RashRelief />
      </div>
      <div>
        <PainRelief />
      </div>
    </div>
  );
}

function ChickenPoxFacts(){
  function RashRelief() {
    return (
      <div className="py-16 mx-auto ">
        <div class="flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src={poxvirusArt}
            />
          </div>
          <div class="flex flex-col flex-wrap -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <h1 className="text-3xl mb-10">Rash Relief</h1>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  A Few important habits
                </h2>
                <p class="leading-relaxed text-base">
                  <ol className="list-disc ml-4 space-y-1 mb-6">
                    <li>Don't lance (pop) or scratch lesions from the rash.</li>
                    <li>
                      Do not shave the area with the rash until the scabs have
                      fallen off and a new layer of skin has formed.
                    </li>
                    <li>
                      Keep skin lesions/rash clean and dry when not showering or
                      bathing.
                    </li>
                  </ol>
                </p>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Topical benzocaine/lidocaine gels
                </h2>
                <p class="leading-relaxed text-base">
                  Apply Topical benzocaine/lidocaine gels for temporary relief.
                  <br />
                  Oral antihistamines such as Benadryl and topical creams such
                  as calamine lotion or petroleum jelly may help with itching.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Taking a warm bath
                </h2>
                <p class="leading-relaxed text-base">
                  Soaking in a warm bath (using oatmeal or other over-thecounter
                  bath products for itchy skin) may offer some relief to the
                  dry, itchy sensations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function PainRelief() {
    return (
      <div className="py-16 mx-auto ">
        <div class="flex flex-wrap">
          <div class="flex flex-col flex-wrap -mb-10 lg:w-1/2 lg:pr-12 lg:text-left text-center">
            <h1 className="text-3xl mb-10">Pain Relief</h1>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Medicines
                </h2>
                <p class="leading-relaxed text-base">
                  ibuprofen (Advil, Motrin) and acetaminophen (Tylenol) can help
                  you feel better. Your healthcare provider may prescribe stronger pain relievers
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  For rashes in the mouth
                </h2>
                <p class="leading-relaxed text-base">
                Rinse with salt
water at least four times a day. Prescription mouthwashes, or
local anesthetics like viscous lidocaine can be used to manage
pain. Oral antiseptics like chlorhexidine mouthwash can be used
to help keep the mouth clean.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Contact a doctor
                </h2>
                <p class="leading-relaxed text-base">
                  Contact your healthcare provider if pain becomes severe and
                  unmanageable at home.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src={poxvirusArt2}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <RashRelief />
      </div>
      <div>
        <PainRelief />
      </div>
    </div>
  );
}

// fun facts depending on the module and the results

export default function Facts({ module, predicted_class_idx }) {
  // skin - burn
  switch (module) {
    case "skin-burn":
      if (predicted_class_idx === 0) return <LightBurnSteps />;
      else if (predicted_class_idx === 1) return <ModerateBurnSteps />;
    case "pox-viruses":
      if (predicted_class_idx === 3) return <MonkeyPoxFacts />;
      if (predicted_class_idx === 0) return <ChickenPoxFacts />;
  }
  return "Facts for " + module + " not setup!";
}
