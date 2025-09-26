"use client";

import React, { useState } from "react";
import { useLocale } from "@/i18n/utils";
import { rtlLocales, type Locale } from "@/i18n/config";

export default function VolunteerForm() {
  const locale = useLocale();
  const isRTL = rtlLocales.includes(locale as Locale);
  const [data, setData] = useState({
    lastName: "",
    otherNames: "",
    country: "",
    city: "",
    email: "",
    phone: "",
    skills: "",
    type: "",
    note: "",
  });

  const handle = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setData({ ...data, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate API/Email service
    console.log("Volunteer form:", data);
  };

  return (
    <section
      className="py-16 md:py-20 bg-white relative isolate"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/illustrations/noise.png')",
          backgroundSize: "cover",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute inset-x-5 -top-50 overflow-hidden pb-1">
          {/* Marquee Image Grid */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div
              className="flex gap-2 items-center max-w-none animate-marquee"
              style={{
                animation: "marquee 20s linear infinite",
                width: "max-content",
              }}
            >
              {/* Repeat images twice for seamless marquee */}
              {[...Array(2)].map((_, idx) => (
                <React.Fragment key={idx}>
                  {/* Image 1 - Child with container on head */}
                  <div className="relative transform transition-transform duration-300">
                    <img
                      src="/images/volunteer-1.png"
                      alt={
                        locale === "ar"
                          ? "طفل يحمل حاوية على رأسه"
                          : "Child carrying container on head"
                      }
                      className="h-80 sm:h-100"
                    />
                  </div>
                  {/* Image 2 - Child in water */}
                  <div className="relative transform transition-transform duration-300">
                    <img
                      src="/images/volunteer-2.png"
                      alt={locale === "ar" ? "طفل في الماء" : "Child in water"}
                      className="h-90 sm:h-120"
                    />
                  </div>
                  {/* Image 3 - Two children with basins */}
                  <div className="relative transform transition-transform duration-300">
                    <img
                      src="/images/volunteer-3.png"
                      alt={
                        locale === "ar"
                          ? "طفلان يحملان أحواض"
                          : "Two children carrying basins"
                      }
                      className="h-90 sm:h-120"
                    />
                  </div>
                  {/* Image 4 - Child with metal pot */}
                  <div className="relative transform transition-transform duration-300">
                    <img
                      src="/images/volunteer-4.png"
                      alt={
                        locale === "ar"
                          ? "طفل يحمل وعاء معدني"
                          : "Child carrying metal pot"
                      }
                      className="h-80 sm:h-100"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
            {/* Marquee animation keyframes */}
            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-60 sm:pt-90">
        <h2 className="text-center text-4xl md:text-6xl font-bold text-primary-light mb-3">
          {locale === "ar" ? "سجّل للتطوع" : "Sign Up to Volunteer"}
        </h2>
        <p className="text-center text-[#0D2F2B] mb-2 font-semibold">
          {locale === "ar"
            ? "خُطوة واحدة تصنع فرقاً يدوم العمر."
            : "It takes just one step to make a lifetime of difference."}
        </p>
        <p className="text-center text-[#0D2F2B] mb-10 font-medium">
          {locale === "ar"
            ? "يرجى إكمال النموزج أدناه. سنراسلك قريباً بمعلومات البدء."
            : "Please fill the form below. We'll reach out with onboarding information shortly."}
        </p>
        <form
          onSubmit={submit}
          className="bg-white border border-[#EEF1E9] rounded-2xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar" ? "الاسم الأخير" : "Last Name"}
              </label>
              <input
                name="lastName"
                placeholder={
                  locale === "ar" ? "الاسم الأخير" : "Enter last name"
                }
                value={data.lastName}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar" ? "أسماء أخرى" : "Other Names"}
              </label>
              <input
                name="otherNames"
                placeholder={
                  locale === "ar" ? "أسماء أخرى" : "Enter other names"
                }
                value={data.otherNames}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar" ? "الدولة" : "Country"}
              </label>
              <select
                name="country"
                value={data.country}
                onChange={handle}
                className="w-full px-4 py-2.5 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              >
                <option value="">
                  {locale === "ar" ? "اختر الدولة" : "--select country--"}
                </option>
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">Congo, Democratic Republic of the</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Côte d&apos;Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and McDonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">
                  Korea, Democratic People&apos;s Republic of
                </option>
                <option value="KR">Korea, Republic of</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">
                  Lao People&apos;s Democratic Republic
                </option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">
                  Macedonia, the former Yugoslav Republic of
                </option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Réunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthélemy</option>
                <option value="SH">
                  Saint Helena, Ascension and Tristan da Cunha
                </option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin (French part)</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten (Dutch part)</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">
                  South Georgia and the South Sandwich Islands
                </option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela, Bolivarian Republic of</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="VI">Virgin Islands, U.S.</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar" ? "المدينة" : "City"}
              </label>
              <input
                name="city"
                placeholder={locale === "ar" ? "المدينة" : "Enter city"}
                value={data.city}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar" ? "البريد الإلكتروني" : "Email address"}
              </label>
              <input
                type="email"
                name="email"
                placeholder={
                  locale === "ar" ? "البريد الإلكتروني" : "Enter email"
                }
                value={data.email}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar"
                  ? "واتساب / جوال (اختياري)"
                  : "WhatsApp / Mobile (optional)"}
              </label>
              <input
                name="phone"
                placeholder={
                  locale === "ar"
                    ? "واتساب / جوال (اختياري)"
                    : "WhatsApp / Mobile (optional)"
                }
                value={data.phone}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar"
                  ? "المهارات / مجالات الاهتمام"
                  : "Skill(s) or Area of Interest"}
              </label>
              <select
                name="skills"
                value={data.skills}
                onChange={handle}
                className="w-full px-4 py-2.5 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              >
                <option value="">
                  {locale === "ar"
                    ? "اختر مجال الاهتمام"
                    : "--select area of interest--"}
                </option>
                <option value="On-Ground Support">
                  {locale === "ar" ? "الدعم الميداني" : "On-Ground Support"}
                </option>
                <option value="Faith Ambassadors">
                  {locale === "ar" ? "سفراء الإيمان" : "Faith Ambassadors"}
                </option>
                <option value="Digital Da'wah">
                  {locale === "ar" ? "الدعوة الرقمية" : "Digital Da'wah"}
                </option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                {locale === "ar" ? "نوع المتطوع" : "Volunteer Type"}
              </label>
              <input
                name="type"
                placeholder={
                  locale === "ar" ? "نوع المتطوع" : "Enter volunteer type"
                }
                value={data.type}
                onChange={handle}
                className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
              {locale === "ar" ? "ملاحظة قصيرة" : "Short Note"}
            </label>
            <textarea
              name="note"
              placeholder={
                locale === "ar" ? "ملاحظة قصيرة" : "Enter short note"
              }
              value={data.note}
              onChange={handle}
              rows={5}
              className="w-full px-4 py-2 rounded-md border border-[#C0CFAD] focus:ring-1 focus:ring-primary-dark outline-none"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-primary-dark hover:opacity-80 text-white font-semibold px-20 py-3 rounded-full transition-opacity cursor-pointer"
            >
              {locale === "ar" ? "إرسال" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
