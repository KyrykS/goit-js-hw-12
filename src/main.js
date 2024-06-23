
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery, togLoadMoreBtn } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

const searchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  currentQuery = document.getElementById('search-input').value.trim();
  if (!currentQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search word!',
    });
    return;
  }

  currentPage = 1;
  clearGallery();
  togLoadMoreBtn(false);
  showLoader();

  try {
    const data = await fetchImages(currentQuery, currentPage);

    if (data.hits.length === 0) {
      iziToast.info({
        title: 'Info',
        message: 'Sorry, there are no images matching your search query!',
      });
      return;
    }

    totalHits = data.totalHits;
    renderImages(data.hits);

    if (data.hits.length < totalHits) {
      togLoadMoreBtn(true);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong!',
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  currentPage += 1;
  togLoadMoreBtn(false);
  showLoader();

  try {
    const data = await fetchImages(currentQuery, currentPage);
    renderImages(data.hits);

    const { height: cardHeight } = document.querySelector('.gallery').firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (currentPage * 15 >= totalHits) {
      iziToast.info({
        title: 'Info',
        message: "No more results.",
      });
    } else {
      togLoadMoreBtn(true);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong!',
    });
  } finally {
    hideLoader();
  }
}

function showLoader() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  document.body.appendChild(loader);
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}