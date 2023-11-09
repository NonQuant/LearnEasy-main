from django.db import models
from slugify import slugify


class SlugModel(models.Model):
    slug = models.SlugField(unique=True, verbose_name='Slug')

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.slug = slugify(self.get_slug_text())
        super().save(*args, **kwargs)

    def get_slug_text(self):
        raise NotImplementedError('Subclass of SlugModel must implement get_slug_text method')
