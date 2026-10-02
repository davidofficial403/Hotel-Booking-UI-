/* Tidewater Stays – front-end only hotel booking demo (jQuery, no backend) */
$(function () {
  "use strict";

  /* ---------- Data ---------- */
  var HOTELS = [
    { id: 1, name: "Cape Horizon Resort", city: "Kanyakumari", area: "Sunrise Point", stars: 5, rating: 9.2, reviews: 1284,
      amenities: ["Pool", "Wi-Fi", "Breakfast", "Parking", "Spa", "Beach access"],
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=70",
      desc: "Sea-facing rooms a short walk from the sunrise viewpoint, with a rooftop pool and an in-house spa.",
      rooms: [
        { name: "Deluxe Sea View", beds: "1 king bed", sleeps: 2, price: 8200, perks: "Breakfast included · Free cancellation" },
        { name: "Family Suite", beds: "2 queen beds", sleeps: 4, price: 12800, perks: "Breakfast included · Balcony" } ] },
    { id: 2, name: "Lotus Court Inn", city: "Kanyakumari", area: "Town Centre", stars: 3, rating: 8.1, reviews: 642,
      amenities: ["Wi-Fi", "Parking", "Breakfast"],
      img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=70",
      desc: "Simple, clean rooms near the bus stand and temple street. Good value for short stays.",
      rooms: [
        { name: "Standard Double", beds: "1 double bed", sleeps: 2, price: 2400, perks: "Free Wi-Fi" },
        { name: "Triple Room", beds: "3 single beds", sleeps: 3, price: 3300, perks: "Breakfast included" } ] },
    { id: 3, name: "Palm Shore Beach Club", city: "Goa", area: "Candolim", stars: 4, rating: 8.7, reviews: 2210,
      amenities: ["Pool", "Wi-Fi", "Breakfast", "Beach access", "Parking"],
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=70",
      desc: "Garden-set rooms around a large pool, 200 metres from the beach.",
      rooms: [
        { name: "Garden Room", beds: "1 queen bed", sleeps: 2, price: 5600, perks: "Breakfast included" },
        { name: "Pool Villa", beds: "1 king bed + sofa bed", sleeps: 3, price: 9800, perks: "Private plunge pool" } ] },
    { id: 4, name: "Mist Valley Lodge", city: "Munnar", area: "Tea Estate Road", stars: 4, rating: 9.0, reviews: 913,
      amenities: ["Wi-Fi", "Breakfast", "Spa", "Parking"],
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=70",
      desc: "Wooden cottages above the tea gardens. Cool mornings, log fires and a small ayurveda spa.",
      rooms: [
        { name: "Hill Cottage", beds: "1 king bed", sleeps: 2, price: 6900, perks: "Breakfast included · Valley view" },
        { name: "Estate Family Cottage", beds: "2 double beds", sleeps: 4, price: 10400, perks: "Breakfast included · Fireplace" } ] },
    { id: 5, name: "Harbour Gate Hotel", city: "Kochi", area: "Fort Kochi", stars: 4, rating: 8.5, reviews: 1507,
      amenities: ["Pool", "Wi-Fi", "Breakfast"],
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&q=70",
      desc: "A restored heritage building facing the Chinese fishing nets, with a courtyard pool.",
      rooms: [
        { name: "Heritage Room", beds: "1 queen bed", sleeps: 2, price: 5200, perks: "Breakfast included" },
        { name: "Courtyard Suite", beds: "1 king bed", sleeps: 3, price: 8400, perks: "Pool access from room" } ] },
    { id: 6, name: "Marina Tower Business Hotel", city: "Chennai", area: "Nungambakkam", stars: 5, rating: 8.9, reviews: 3120,
      amenities: ["Pool", "Wi-Fi", "Breakfast", "Spa", "Parking"],
      img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=70",
      desc: "Central tower with a work lounge, rooftop pool and 24-hour check-in.",
      rooms: [
        { name: "Executive Room", beds: "1 king bed", sleeps: 2, price: 7400, perks: "Lounge access · Breakfast included" },
        { name: "Corner Suite", beds: "1 king bed + sofa bed", sleeps: 3, price: 13500, perks: "City view · Late check-out" } ] },
    { id: 7, name: "Chennai Central Stay", city: "Chennai", area: "Egmore", stars: 3, rating: 7.8, reviews: 988,
      amenities: ["Wi-Fi", "Parking"],
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=70",
      desc: "Five minutes from the railway station. Compact rooms, quick check-in.",
      rooms: [
        { name: "Compact Room", beds: "1 double bed", sleeps: 2, price: 2100, perks: "Free Wi-Fi" },
        { name: "Twin Room", beds: "2 single beds", sleeps: 2, price: 2500, perks: "Free parking" } ] },
    { id: 8, name: "Amber Fort Haveli", city: "Jaipur", area: "Old City", stars: 5, rating: 9.4, reviews: 1760,
      amenities: ["Pool", "Wi-Fi", "Breakfast", "Spa", "Parking"],
      img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=70",
      desc: "A family-run haveli with painted courtyards, a rooftop restaurant and evening folk music.",
      rooms: [
        { name: "Royal Room", beds: "1 king bed", sleeps: 2, price: 11800, perks: "Breakfast included · Courtyard view" },
        { name: "Maharaja Suite", beds: "1 king bed + lounge", sleeps: 3, price: 18500, perks: "Private terrace" } ] },
    { id: 9, name: "Blue Reef Guest House", city: "Goa", area: "Palolem", stars: 3, rating: 8.3, reviews: 574,
      amenities: ["Wi-Fi", "Beach access", "Breakfast"],
      img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=70",
      desc: "Beach huts and rooms steps from the sand. Relaxed, quiet and walkable to cafés.",
      rooms: [
        { name: "Beach Hut", beds: "1 double bed", sleeps: 2, price: 3600, perks: "Breakfast included" },
        { name: "Garden Room", beds: "2 single beds", sleeps: 2, price: 3000, perks: "Free Wi-Fi" } ] }
  ];

  var GRADIENTS = ["#137C85,#0F2A3D", "#F5B83D,#E4572E", "#8FD3D8,#137C85", "#0F2A3D,#5A6F7C"];
  var TAX_RATE = 0.12;

  /* ---------- State ---------- */
  var state = {
    dest: "", checkin: "", checkout: "", guests: 2,
    maxPrice: 20000, stars: [], amenities: [], sort: "recommended", savedOnly: false
  };
  var saved = load("tw_saved", []);
  var bookings = load("tw_bookings", []);
  var current = { hotel: null, room: null };
  var lastFocus = null;

  /* ---------- Helpers ---------- */
  function load(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v === null ? fallback : v; }
    catch (e) { return fallback; }
  }
  function store(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* storage unavailable */ }
  }
  function money(n) { return "₹" + Number(n).toLocaleString("en-IN"); }
  function esc(s) { return $("<div>").text(s).html(); }
  function iso(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function addDays(dateStr, n) { var d = new Date(dateStr + "T00:00:00"); d.setDate(d.getDate() + n); return iso(d); }
  function nightsBetween(a, b) { return Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 86400000); }
  function nice(dateStr) { return new Date(dateStr + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }); }
  function stars(n) { return "★".repeat(n) + "☆".repeat(5 - n); }
  function lowest(h) { return Math.min.apply(null, h.rooms.map(function (r) { return r.price; })); }
  function nights() { return state.checkin && state.checkout ? Math.max(1, nightsBetween(state.checkin, state.checkout)) : 1; }
  function gradient(i) { return "linear-gradient(135deg," + GRADIENTS[i % GRADIENTS.length] + ")"; }
  function ratingWord(r) { return r >= 9 ? "Exceptional" : r >= 8.5 ? "Excellent" : r >= 8 ? "Very good" : "Good"; }
  function toast(msg) {
    var $t = $("#toast").text(msg).stop(true, true).fadeIn(120);
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { $t.fadeOut(200); }, 2400);
  }

  /* ---------- Init form ---------- */
  var cities = Array.from(new Set(HOTELS.map(function (h) { return h.city; }))).sort();
  cities.forEach(function (c) { $("#destination").append($("<option>").val(c).text(c)); });

  var today = iso(new Date());
  state.checkin = addDays(today, 1);
  state.checkout = addDays(today, 3);
  $("#checkin").attr("min", today).val(state.checkin);
  $("#checkout").attr("min", addDays(state.checkin, 1)).val(state.checkout);

  /* ---------- Search form ---------- */
  $("#checkin").on("change", function () {
    var v = $(this).val();
    if (!v) return;
    $("#checkout").attr("min", addDays(v, 1));
    if (!$("#checkout").val() || nightsBetween(v, $("#checkout").val()) < 1) $("#checkout").val(addDays(v, 1));
  });

  $("#guestMinus").on("click", function () { setGuests(state.guests - 1); });
  $("#guestPlus").on("click", function () { setGuests(state.guests + 1); });
  function setGuests(n) {
    state.guests = Math.min(8, Math.max(1, n));
    $("#guestCount").text(state.guests);
  }

  $("#searchForm").on("submit", function (e) {
    e.preventDefault();
    var ci = $("#checkin").val(), co = $("#checkout").val(), $err = $("#searchError");
    if (!ci || !co) return $err.text("Choose check-in and check-out dates.").prop("hidden", false);
    if (ci < today) return $err.text("Check-in can't be in the past.").prop("hidden", false);
    if (nightsBetween(ci, co) < 1) return $err.text("Check-out must be at least one night after check-in.").prop("hidden", false);
    $err.prop("hidden", true);
    state.dest = $("#destination").val();
    state.checkin = ci; state.checkout = co;
    state.savedOnly = false; $("#navSaved").removeClass("is-active");
    render();
    $("html, body").animate({ scrollTop: $("#results").offset().top - 70 }, 300);
  });

  /* ---------- Filters ---------- */
  $("#priceRange").on("input", function () {
    state.maxPrice = +this.value;
    $("#priceLabel").text(money(state.maxPrice));
    render();
  });
  $("input[name=stars]").on("change", function () {
    state.stars = $("input[name=stars]:checked").map(function () { return +this.value; }).get();
    render();
  });
  $("input[name=amenity]").on("change", function () {
    state.amenities = $("input[name=amenity]:checked").map(function () { return this.value; }).get();
    render();
  });
  $("#sortBy").on("change", function () { state.sort = this.value; render(); });

  function resetFilters() {
    state.maxPrice = 20000; state.stars = []; state.amenities = []; state.dest = ""; state.savedOnly = false;
    $("#priceRange").val(20000); $("#priceLabel").text(money(20000));
    $("input[name=stars], input[name=amenity]").prop("checked", false);
    $("#destination").val(""); $("#navSaved").removeClass("is-active");
    render();
  }
  $("#resetFilters, #emptyReset").on("click", resetFilters);

  $("#navSaved").on("click", function () {
    state.savedOnly = !state.savedOnly;
    $(this).toggleClass("is-active", state.savedOnly);
    render();
    $("html, body").animate({ scrollTop: $("#results").offset().top - 70 }, 300);
  });

  /* ---------- Render list ---------- */
  function filtered() {
    var list = HOTELS.filter(function (h) {
      if (state.dest && h.city !== state.dest) return false;
      if (lowest(h) > state.maxPrice) return false;
      if (state.stars.length && state.stars.indexOf(h.stars) === -1) return false;
      if (state.amenities.some(function (a) { return h.amenities.indexOf(a) === -1; })) return false;
      if (state.savedOnly && saved.indexOf(h.id) === -1) return false;
      return h.rooms.some(function (r) { return r.sleeps >= state.guests; });
    });
    var sorters = {
      recommended: function (a, b) { return b.rating * Math.log(b.reviews) - a.rating * Math.log(a.reviews); },
      priceAsc: function (a, b) { return lowest(a) - lowest(b); },
      priceDesc: function (a, b) { return lowest(b) - lowest(a); },
      rating: function (a, b) { return b.rating - a.rating; }
    };
    return list.sort(sorters[state.sort]);
  }

  function render() {
    var list = filtered(), n = nights();
    var html = list.map(function (h, i) {
      var isSaved = saved.indexOf(h.id) !== -1;
      return '<article class="card" data-id="' + h.id + '">' +
        '<div class="card__media" style="background-image:' + gradient(i) + '">' +
          '<img src="' + h.img + '" alt="' + esc(h.name) + ' exterior" loading="lazy" onerror="this.remove()">' +
          '<button type="button" class="heart ' + (isSaved ? "is-on" : "") + '" data-heart="' + h.id + '" aria-pressed="' + isSaved + '" aria-label="' + (isSaved ? "Remove " : "Save ") + esc(h.name) + (isSaved ? " from saved" : " to saved") + '">' +
            '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3 5.5 6.2 5.5c2 0 3.3 1.1 3.8 2 .5-.9 1.8-2 3.8-2 3.2 0 5 3.1 3.7 6.3C19.5 16.4 12 21 12 21z"/></svg>' +
          '</button></div>' +
        '<div class="card__body">' +
          '<span class="stars" aria-label="' + h.stars + ' star hotel">' + stars(h.stars) + '</span>' +
          '<h3>' + esc(h.name) + '</h3>' +
          '<p class="where">' + esc(h.area) + ', ' + esc(h.city) + '</p>' +
          '<ul class="chips">' + h.amenities.slice(0, 4).map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + '</ul>' +
        '</div>' +
        '<div class="card__side">' +
          '<div class="score"><div><strong>' + ratingWord(h.rating) + '</strong><small>' + h.reviews.toLocaleString("en-IN") + ' reviews</small></div><b>' + h.rating.toFixed(1) + '</b></div>' +
          '<div class="price"><small>From</small><strong>' + money(lowest(h)) + '</strong><small>per night · ' + n + (n > 1 ? " nights" : " night") + ' ' + money(lowest(h) * n) + '</small></div>' +
          '<button type="button" class="btn btn--primary" data-view="' + h.id + '">View rooms</button>' +
        '</div></article>';
    }).join("");

    $("#hotelList").html(html);
    $("#emptyState").prop("hidden", list.length > 0);
    var where = state.dest ? " in " + state.dest : "";
    $("#resultTitle").text(state.savedOnly ? list.length + " saved " + (list.length === 1 ? "hotel" : "hotels")
                                          : list.length + (list.length === 1 ? " hotel" : " hotels") + where);
    $("#savedCount").text(saved.length);
    $("#bookingCount").text(bookings.filter(function (b) { return b.status === "Confirmed"; }).length);
  }

  /* ---------- Save hotels ---------- */
  $("#hotelList").on("click", "[data-heart]", function (e) {
    e.stopPropagation();
    var id = +$(this).data("heart"), i = saved.indexOf(id);
    if (i === -1) { saved.push(id); toast("Saved to your list"); } else { saved.splice(i, 1); toast("Removed from saved"); }
    store("tw_saved", saved);
    render();
  });

  /* ---------- Modals ---------- */
  function openModal($m) {
    lastFocus = document.activeElement;
    $m.prop("hidden", false);
    $("body").css("overflow", "hidden");
    $m.find("button, input, select, textarea").filter(":visible").first().trigger("focus");
  }
  function closeModals() {
    $(".modal").prop("hidden", true);
    closeDrawer(true);
    $("body").css("overflow", "");
    if (lastFocus) $(lastFocus).trigger("focus");
  }
  $(document).on("click", "[data-close]", closeModals);
  $(".modal").on("mousedown", function (e) { if (e.target === this) closeModals(); });
  $(document).on("keydown", function (e) { if (e.key === "Escape") closeModals(); });

  /* ---------- Hotel detail ---------- */
  $("#hotelList").on("click", "[data-view]", function () { openDetail(+$(this).data("view")); });
  $("#hotelList").on("click", ".card__media, .card__body h3", function (e) {
    if ($(e.target).closest("[data-heart]").length) return;
    openDetail(+$(this).closest(".card").data("id"));
  });

  function openDetail(id) {
    var h = HOTELS.filter(function (x) { return x.id === id; })[0];
    current.hotel = h;
    var n = nights();
    $("#detailMedia").css("background-image", gradient(h.id)).html('<img src="' + h.img + '" alt="' + esc(h.name) + '" onerror="this.remove()">');
    $("#detailTitle").text(h.name);
    $("#detailMeta").html('<span class="stars">' + stars(h.stars) + '</span> &nbsp;' + esc(h.area) + ', ' + esc(h.city) + ' &nbsp;·&nbsp; ' + h.rating.toFixed(1) + ' (' + h.reviews.toLocaleString("en-IN") + ' reviews)');
    $("#detailDesc").text(h.desc);
    $("#detailAmenities").html(h.amenities.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join(""));
    $("#detailStay").text(nice(state.checkin) + " to " + nice(state.checkout) + " · " + n + (n > 1 ? " nights" : " night") + " · " + state.guests + (state.guests > 1 ? " guests" : " guest"));

    $("#roomList").html(h.rooms.map(function (r, idx) {
      var fits = r.sleeps >= state.guests;
      return '<div class="room ' + (fits ? "" : "is-full") + '">' +
        '<div><h4>' + esc(r.name) + '</h4><p>' + esc(r.beds) + ' · Sleeps ' + r.sleeps + '</p><p>' + esc(r.perks) + '</p>' +
          (fits ? "" : '<p class="room__warn">Too small for ' + state.guests + ' guests</p>') + '</div>' +
        '<div class="room__price"><strong>' + money(r.price * n) + '</strong><small>' + money(r.price) + ' per night</small>' +
          '<button type="button" class="btn btn--primary" data-room="' + idx + '"' + (fits ? "" : " disabled") + '>Select room</button></div></div>';
    }).join(""));
    $(".modal").prop("hidden", true);
    openModal($("#detailModal"));
  }

  /* ---------- Booking form ---------- */
  $("#roomList").on("click", "[data-room]", function () {
    current.room = current.hotel.rooms[+$(this).data("room")];
    var n = nights(), base = current.room.price * n, tax = Math.round(base * TAX_RATE);
    $("#bookSummary").html(
      '<h3>' + esc(current.hotel.name) + '</h3>' +
      '<p>' + esc(current.room.name) + ' · ' + esc(current.hotel.city) + '</p>' +
      '<p>' + nice(state.checkin) + ' to ' + nice(state.checkout) + ' · ' + state.guests + (state.guests > 1 ? " guests" : " guest") + '</p>' +
      '<dl><dt>' + money(current.room.price) + ' × ' + n + (n > 1 ? " nights" : " night") + '</dt><dd>' + money(base) + '</dd>' +
      '<dt>Taxes and fees (12%)</dt><dd>' + money(tax) + '</dd>' +
      '<dt class="total">Total</dt><dd class="total">' + money(base + tax) + '</dd></dl>');
    $("#bookForm")[0].reset();
    clearErrors();
    $(".modal").prop("hidden", true);
    openModal($("#bookModal"));
  });

  $("#gPhone").on("input", function () { this.value = this.value.replace(/\D/g, ""); });

  function setError(id, msg) {
    $('.err[data-for="' + id + '"]').text(msg);
    $("#" + id).closest(".input").toggleClass("has-error", !!msg);
  }
  function clearErrors() { $(".err").text(""); $(".input").removeClass("has-error"); }

  function validate() {
    clearErrors();
    var ok = true, name = $.trim($("#gName").val()), email = $.trim($("#gEmail").val()), phone = $("#gPhone").val();
    if (name.length < 2) { setError("gName", "Enter the guest's full name."); ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("gEmail", "Enter a valid email address."); ok = false; }
    if (!/^[6-9]\d{9}$/.test(phone)) { setError("gPhone", "Enter a 10-digit mobile number."); ok = false; }
    if (!$("#gTerms").is(":checked")) { setError("gTerms", "Accept the policy to continue."); ok = false; }
    return ok;
  }

  $("#bookForm").on("submit", function (e) {
    e.preventDefault();
    if (!validate()) return;
    var n = nights(), base = current.room.price * n, total = base + Math.round(base * TAX_RATE);
    var booking = {
      id: "TW" + Date.now().toString(36).toUpperCase().slice(-6),
      hotel: current.hotel.name, city: current.hotel.city, room: current.room.name,
      checkin: state.checkin, checkout: state.checkout, nights: n, guests: state.guests,
      guest: $.trim($("#gName").val()), email: $.trim($("#gEmail").val()), phone: $("#gPhone").val(),
      notes: $.trim($("#gNotes").val()), total: total, status: "Confirmed"
    };
    bookings.unshift(booking);
    store("tw_bookings", bookings);
    render();
    $("#doneText").text(booking.hotel + ", " + nice(booking.checkin) + " to " + nice(booking.checkout) + ". A confirmation would be sent to " + booking.email + ".");
    $("#doneId").text(booking.id);
    $(".modal").prop("hidden", true);
    openModal($("#doneModal"));
  });

  /* ---------- My bookings drawer ---------- */
  function renderBookings() {
    if (!bookings.length) {
      $("#bookingList").html('<div class="empty"><h3>No bookings yet</h3><p>Pick a hotel and your confirmed stays will show up here.</p></div>');
      return;
    }
    $("#bookingList").html(bookings.map(function (b) {
      var cancelled = b.status === "Cancelled";
      return '<div class="booking ' + (cancelled ? "is-cancelled" : "") + '">' +
        '<h3>' + esc(b.hotel) + '</h3>' +
        '<p>' + esc(b.room) + ' · ' + esc(b.city) + '</p>' +
        '<p>' + nice(b.checkin) + ' to ' + nice(b.checkout) + ' · ' + b.nights + (b.nights > 1 ? " nights" : " night") + ' · ' + b.guests + (b.guests > 1 ? " guests" : " guest") + '</p>' +
        '<p>Booked for ' + esc(b.guest) + ' · ID ' + esc(b.id) + '</p>' +
        '<div class="booking__foot"><strong>' + money(b.total) + '</strong>' +
          '<span class="tag ' + (cancelled ? "tag--cancelled" : "") + '">' + b.status + '</span>' +
          (cancelled ? "" : '<button type="button" class="link" data-cancel="' + esc(b.id) + '">Cancel booking</button>') +
        '</div></div>';
    }).join(""));
  }
  function openDrawer() {
    lastFocus = document.activeElement;
    renderBookings();
    $("#scrim, #drawer").prop("hidden", false);
    $("#drawerClose").trigger("focus");
  }
  function closeDrawer(silent) {
    $("#scrim, #drawer").prop("hidden", true);
    if (!silent && lastFocus) $(lastFocus).trigger("focus");
  }
  $("#navBookings").on("click", openDrawer);
  $("#drawerClose, #scrim").on("click", function () { closeDrawer(); });
  $("#doneView").on("click", function () { $(".modal").prop("hidden", true); $("body").css("overflow", ""); openDrawer(); });

  $("#bookingList").on("click", "[data-cancel]", function () {
    var id = $(this).data("cancel");
    if (!window.confirm("Cancel booking " + id + "?")) return;
    bookings.forEach(function (b) { if (b.id === id) b.status = "Cancelled"; });
    store("tw_bookings", bookings);
    renderBookings(); render();
    toast("Booking " + id + " cancelled");
  });

  /* ---------- Go ---------- */
  render();
});
