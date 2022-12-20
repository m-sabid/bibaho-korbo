const FindPartner = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-primary bg-opacity-80 lg:w-3/4 sm:w-3/4 md:w-full z-50 py-5 px-5 rounded-lg absolute drop-shadow-lg">
          <h3 className="text-center text-lg font-bold">
            Find Your Best Partner
          </h3>

          <form className="flex lg:flex-row md:flex-row sm:flex-col flex-col justify-around items-center py-5">
            <div className="flex flex-col lg:w-auto md:w-auto sm:w-full w-full text-center">
              <label htmlFor="" className="">
                Looking For
              </label>
              <select className="py-1 rounded lg:max-w-xs md:max-w-xs sm:w-full bg-slate-200 outline-none">
                <option selected value="Woman">
                  Woman
                </option>
                <option value="Man">Man</option>
              </select>
            </div>
            {/* Age */}
            <div className="flex flex-col lg:w-auto md:w-auto sm:w-full w-full text-center">
              <label htmlFor="" className="">
                Minimum Age
              </label>
              <select className="py-1 rounded lg:max-w-xs md:max-w-xs sm:w-full bg-slate-200 outline-none">
                <option selected value="18">
                  18
                </option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
                <option value="60">60</option>
              </select>
            </div>
            <p>To</p>
            {/* to */}
            <div className="flex flex-col lg:w-auto md:w-auto sm:w-full w-full text-center">
              <label htmlFor="" className="">
                Maximum Age
              </label>
              <select className="py-1 rounded lg:max-w-xs md:max-w-xs sm:w-full bg-slate-200 outline-none">
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option selected value="40">
                  40
                </option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
                <option value="60">60</option>
              </select>
            </div>
            {/* Religion */}
            <div className="flex flex-col lg:w-auto md:w-auto sm:w-full w-full text-center">
              <label htmlFor="" className="">
                <div className="flex flex-col lg:w-auto md:w-auto sm:w-full w-full text-center">
                  <label htmlFor="" className="">
                    Religion
                  </label>
                  <select className="py-1 rounded lg:max-w-xs md:max-w-xs sm:w-full bg-slate-200 outline-none">
                    <option selected value="muslim">
                      Muslim
                    </option>
                    <option selected value="hindu">
                      Hindu
                    </option>
                    <option selected value="buddish">
                      Buddish
                    </option>
                    <option selected value="christian">
                      Christian
                    </option>
                  </select>
                </div>
              </label>
            </div>

            {/* Professions */}
            <div className="flex flex-col lg:w-auto md:w-auto sm:w-full w-full text-center">
              <label htmlFor="" className="">
                Professions
              </label>
              <select className="py-1 rounded lg:max-w-xs md:max-w-xs sm:w-full bg-slate-200 outline-none">
                <option selected value="">
                  Any Professions
                </option>
                <option value="1">Accounting & Banking</option>
                <option value="2">Administration & HR</option>
                <option value="3">Advertising & Media</option>
                <option value="4">Agriculture</option>
                <option value="5">Airline & Aviation</option>
                <option value="6">Architecture & Design</option>
                <option value="7">Artists & Animators</option>
                <option value="8">Beauty & Fashion</option>
                <option value="9">Defense</option>
                <option value="10">Education & Training</option>
                <option value="11">Engineering</option>
                <option value="12">IT & Software Engineering</option>
                <option value="13">Legal</option>
                <option value="14">Medical & Healthcare</option>
                <option value="15">Sales & Marketing</option>
                <option value="16">Business & Others</option>
                <option value="17">Not Working</option>
              </select>
            </div>

            {/* submit */}
            <div className="flex flex-col lg:w-auto md:w-auto sm:w-full w-full text-center justify-center items-center">
              <label htmlFor="" className="min-h-[1rem]"></label>
              <input
                type="submit"
                value="Submit"
                className="bg-secondary py-1 px-2 rounded-lg"
              />
            </div>
          </form>
          <p className="text-center">
            {" "}
            🛡️ Securely search your life partner
          </p>
        </div>
      </div>
    </>
  );
};

export default FindPartner;
